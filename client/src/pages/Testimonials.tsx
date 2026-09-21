import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos de Clientes
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Avaliações reais serão publicadas nesta página após confirmação e
              autorização dos clientes.
            </p>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md border border-border p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Conteúdo em atualização
              </h2>
              <p className="text-muted-foreground">
                Não apresentamos textos demonstrativos como avaliações reais.
                Para solicitar um orçamento, fale com a Cnsousatec pelo WhatsApp
                ou pela página de contato.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
