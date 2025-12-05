import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Admin() {
  const { user, isAuthenticated } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filesMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success("Arquivo enviado com sucesso!");
      setSelectedFile(null);
    },
    onError: (error) => {
      toast.error(`Erro ao enviar arquivo: ${error.message}`);
    },
  });

  const filesQuery = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Acesso Restrito</h1>
            <p className="text-muted-foreground mb-6">
              Você precisa estar autenticado para acessar esta página.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Permissão Negada</h1>
            <p className="text-muted-foreground mb-6">
              Apenas administradores podem acessar esta página.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', user.id.toString());

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const { url, key } = await response.json();

      await filesMutation.mutateAsync({
        fileName: file.name,
        fileUrl: url,
        fileKey: key,
        mimeType: file.type,
        fileSize: file.size,
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Erro ao fazer upload do arquivo");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-primary">
              Painel de Administração
            </h1>

            {/* Upload Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Gerenciador de Arquivos
              </h2>
              <Card className="p-8">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    Enviar Arquivo
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Clique para selecionar um arquivo ou arraste e solte aqui
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="hidden"
                    id="file-input"
                  />
                  <label htmlFor="file-input" className="inline-block">
                    <Button
                      disabled={uploading}
                      className="cursor-pointer"
                    >
                      {uploading ? "Enviando..." : "Selecionar Arquivo"}
                    </Button>
                  </label>
                </div>
              </Card>
            </div>

            {/* Files List */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Arquivos Enviados
              </h2>
              {filesQuery.isLoading ? (
                <p className="text-muted-foreground">Carregando...</p>
              ) : filesQuery.data && filesQuery.data.length > 0 ? (
                <div className="space-y-4">
                  {filesQuery.data.map((file) => (
                    <Card key={file.id} className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FileText className="w-8 h-8 text-accent" />
                        <div>
                          <h3 className="font-bold">{file.fileName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {(file.fileSize ? file.fileSize / 1024 : 0).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <a
                        href={file.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">Baixar</Button>
                      </a>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Nenhum arquivo enviado ainda.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
