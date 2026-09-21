import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Zap,
  Lightbulb,
  Shield,
  Wrench,
  CheckCircle,
  ArrowRight,
  Droplets,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description:
      "Montagem, manutenção e adequação de painéis elétricos de alta performance.",
  },
  {
    icon: Wrench,
    title: "Manutenção Industrial",
    description:
      "Serviços de manutenção preventiva e corretiva para sistemas elétricos.",
  },
  {
    icon: Droplets,
    title: "Manutenções Hidráulicas",
    description:
      "Serviços completos de reparo, instalação e manutenção em sistemas hidráulicos.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Residencial",
    description:
      "Projetos e instalação de iluminação moderna e eficiente para residências.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Logo */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="/logo-cnsousatec-glow.png"
                  alt="Logo CNSOUSATEC"
                  width="288"
                  height="288"
                  decoding="async"
                  className="h-72 w-auto rounded-xl shadow-2xl"
                />
              </div>
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Soluções Técnicas em Elétrica e Eletrônica
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-95">
                  Manutenção elétrica, hidráulica e eletrônica para residências,
                  comércios e empresas em Brasília e no Distrito Federal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contato">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-primary font-bold"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/5561992743428?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20serviços%20elétricos."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Fale conosco no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Por Que Nos Escolher?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Segurança",
                  desc: "Atendimento técnico para sua necessidade",
                },
                {
                  icon: Zap,
                  title: "Eficiência",
                  desc: "Soluções otimizadas e de alto desempenho",
                },
                {
                  icon: CheckCircle,
                  title: "Qualidade",
                  desc: "Serviço orientado ao problema apresentado",
                },
                {
                  icon: Lightbulb,
                  title: "Inovação",
                  desc: "Tecnologias modernas e sustentáveis",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-border"
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-lg text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link href="/servicos">
                      <a className="text-primary font-medium text-sm hover:text-accent transition-colors inline-flex items-center gap-1">
                        Saiba mais <ArrowRight size={16} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-16 md:py-24 bg-white"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
            >
              Perguntas frequentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                [
                  "Quais serviços a Cnsousatec oferece?",
                  "A empresa apresenta serviços de manutenção elétrica, hidráulica e eletrônica, além de suporte técnico especializado.",
                ],
                [
                  "Em qual região o atendimento está disponível?",
                  "O atendimento informado pela empresa contempla Brasília, o Distrito Federal e o entorno de Goiás. Confirme a disponibilidade para o seu endereço ao solicitar o orçamento.",
                ],
                [
                  "Como solicitar um orçamento?",
                  "Você pode usar o formulário de contato ou falar diretamente pelo WhatsApp e descrever o serviço necessário.",
                ],
                [
                  "É possível solicitar atendimento para uma emergência?",
                  "A comunicação atual da empresa informa atendimento técnico 24h. Confirme as condições do atendimento no contato inicial.",
                ],
                [
                  "A empresa realiza manutenção hidráulica?",
                  "Sim. A manutenção hidráulica está entre os serviços apresentados pela Cnsousatec.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="rounded-lg border border-border p-5"
                >
                  <summary className="cursor-pointer font-bold text-primary">
                    {question}
                  </summary>
                  <p className="mt-3 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              com suas necessidades elétricas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-bold"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
              <a href="tel:+5561992743428" className="inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                >
                  Ligar Agora
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
