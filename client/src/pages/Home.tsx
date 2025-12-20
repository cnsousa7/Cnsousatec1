import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useAuth } from "@/_core/hooks/useAuth";
import {
  Zap,
  Lightbulb,
  Shield,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "Indústria Alfa",
    service: "Painéis Elétricos",
    text: "A manutenção dos painéis elétricos foi realizada com excelência e no prazo. Profissionais altamente qualificados. Reduzimos em 15% os custos com energia reativa.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Comércio Beta",
    service: "Iluminação Residencial",
    text: "Projeto de iluminação impecável! A equipe entendeu perfeitamente nossas necessidades e entregou um resultado que superou as expectativas. Recomendo!",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    company: "Empresa Gamma",
    service: "Laudos Técnicos",
    text: "Laudo técnico completo e detalhado. A CNSOUSATEC demonstrou profundo conhecimento das normas. Muito satisfeito com o atendimento.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ana Costa",
    company: "Indústria Delta",
    service: "Manutenção Industrial",
    text: "Manutenção preventiva de excelente qualidade. Evitou paradas não planejadas na produção. Parceria confiável!",
    rating: 5,
  },
];

const services = [
  {
    icon: Zap,
    title: "Painéis Elétricos",
    description: "Montagem, manutenção e adequação de painéis elétricos de alta performance.",
  },
  {
    icon: Wrench,
    title: "Manutenção Industrial",
    description: "Serviços de manutenção preventiva e corretiva para sistemas elétricos.",
  },
  {
    icon: Shield,
    title: "Laudos Técnicos",
    description: "Inspeções, laudos NR-10, SPDA e conformidade com normas técnicas.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Residencial",
    description: "Projetos e instalação de iluminação moderna e eficiente para residências.",
  },
];

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

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
                  src="/Cnsousatec1/logo-cnsousatec-glow.png"
                  alt="CNSOUSATEC Logo"
                  className="h-64 w-64 rounded-xl object-cover shadow-2xl"
                />
              </div>
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Soluções Técnicas em Elétrica e Eletrônica
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-95">
                  Expertise, segurança e inovação para seus projetos elétricos. Confie em profissionais qualificados com certificações NR-10 e CREA.
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
                  desc: "Profissionais certificados NR-10 e CREA",
                },
                {
                  icon: Zap,
                  title: "Eficiência",
                  desc: "Soluções otimizadas e de alto desempenho",
                },
                {
                  icon: CheckCircle,
                  title: "Qualidade",
                  desc: "Trabalho garantido e dentro do prazo",
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

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              O Que Nossos Clientes Dizem
            </h2>
            <TestimonialCarousel testimonials={testimonials} />
            <div className="text-center mt-8">
              <Link href="/depoimentos">
                <Button variant="outline" className="border-primary text-primary">
                  Ver Todos os Depoimentos
                </Button>
              </Link>
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
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar com suas necessidades elétricas.
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
              <a
                href="tel:+5561992743428"
                className="inline-block"
              >
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
