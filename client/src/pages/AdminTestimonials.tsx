import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CheckCircle, XCircle, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminTestimonials() {
  const { user, isAuthenticated } = useAuth();
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected" | "all">("pending");

  const testimonialsQuery = trpc.testimonials.listAll.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const approveTestimonialMutation = trpc.testimonials.approve.useMutation({
    onSuccess: () => {
      toast.success("Depoimento aprovado!");
      testimonialsQuery.refetch();
    },
    onError: (error: any) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  const rejectTestimonialMutation = trpc.testimonials.reject.useMutation({
    onSuccess: () => {
      toast.success("Depoimento rejeitado!");
      testimonialsQuery.refetch();
    },
    onError: (error: any) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Acesso Restrito</h1>
            <p className="text-muted-foreground">
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
            <p className="text-muted-foreground">
              Apenas administradores podem acessar esta página.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const filteredTestimonials = testimonialsQuery.data?.filter((t) => {
    if (filter === "all") return true;
    return t.status === filter;
  }) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-primary">
              Gerenciar Depoimentos
            </h1>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-8 flex-wrap">
              {(["pending", "approved", "rejected", "all"] as const).map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "default" : "outline"}
                  onClick={() => setFilter(status)}
                  className="capitalize"
                >
                  {status === "pending" && "Pendentes"}
                  {status === "approved" && "Aprovados"}
                  {status === "rejected" && "Rejeitados"}
                  {status === "all" && "Todos"}
                </Button>
              ))}
            </div>

            {/* Testimonials List */}
            {testimonialsQuery.isLoading ? (
              <p className="text-muted-foreground">Carregando depoimentos...</p>
            ) : filteredTestimonials.length > 0 ? (
              <div className="space-y-6">
                {filteredTestimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company} • {testimonial.serviceType}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>

                    <p className="text-xs text-muted-foreground mb-4">
                      Email: {testimonial.email}
                    </p>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      {testimonial.status === "pending" && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          <AlertCircle size={14} />
                          Pendente
                        </span>
                      )}
                      {testimonial.status === "approved" && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          <CheckCircle size={14} />
                          Aprovado
                        </span>
                      )}
                      {testimonial.status === "rejected" && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          <XCircle size={14} />
                          Rejeitado
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    {testimonial.status === "pending" && (
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() =>
                            approveTestimonialMutation.mutate({
                              id: testimonial.id,
                            })
                          }
                          disabled={approveTestimonialMutation.isPending}
                        >
                          <CheckCircle size={16} className="mr-2" />
                          Aprovar
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() =>
                            rejectTestimonialMutation.mutate({
                              id: testimonial.id,
                            })
                          }
                          disabled={rejectTestimonialMutation.isPending}
                        >
                          <XCircle size={16} className="mr-2" />
                          Rejeitar
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">
                Nenhum depoimento encontrado nesta categoria.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
