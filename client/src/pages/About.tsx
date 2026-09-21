import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a CNSOUSATEC
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Soluções técnicas em elétrica, hidráulica e eletrônica para
              Brasília e região.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Atuação técnica
                </h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  A Cnsousatec apresenta serviços de manutenção elétrica,
                  hidráulica e eletrônica, com atendimento direcionado às
                  necessidades de residências, comércios e empresas.
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Para conhecer a disponibilidade, a área de atendimento e as
                  condições de cada serviço, entre em contato e descreva sua
                  necessidade.
                </p>
                <Link href="/contato">
                  <Button className="bg-primary hover:bg-primary/90">
                    Falar com a empresa
                  </Button>
                </Link>
              </div>
              <div
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-72 flex items-center justify-center"
                aria-label="Ilustração de soluções técnicas"
              >
                <Zap className="w-24 h-24 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Compromissos de atendimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                [
                  "Clareza",
                  "Entender a necessidade apresentada antes de indicar um serviço.",
                ],
                [
                  "Segurança",
                  "Orientar o atendimento técnico de acordo com o problema identificado.",
                ],
                [
                  "Responsabilidade",
                  "Manter informações comerciais e condições do serviço claras no contato.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-white rounded-lg shadow-md border border-border p-8"
                >
                  <CheckCircle
                    className="w-12 h-12 text-accent mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de uma avaliação?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Envie os detalhes do serviço e solicite um orçamento.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold"
              >
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
