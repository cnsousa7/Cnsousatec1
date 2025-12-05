import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Zap,
  Lightbulb,
  Shield,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const servicesDetail = [
  {
    id: 1,
    icon: Zap,
    title: "Painéis Elétricos",
    shortDesc: "Montagem, manutenção e adequação de painéis",
    fullDesc:
      "Especializados em montagem, manutenção preventiva e corretiva de painéis elétricos. Garantimos conformidade com normas técnicas e máxima segurança operacional.",
    benefits: [
      "Redução de custos operacionais",
      "Aumento da eficiência energética",
      "Conformidade com normas NR-10",
      "Atendimento técnico 24/7",
    ],
  },
  {
    id: 2,
    icon: Wrench,
    title: "Manutenção Industrial",
    shortDesc: "Serviços preventivos e corretivos",
    fullDesc:
      "Manutenção completa de sistemas elétricos industriais, com foco em prevenção de falhas e otimização de desempenho.",
    benefits: [
      "Prevenção de paradas não planejadas",
      "Diagnóstico técnico detalhado",
      "Equipe especializada",
      "Relatórios periódicos",
    ],
  },
  {
    id: 3,
    icon: Shield,
    title: "Laudos Técnicos",
    shortDesc: "Inspeções e conformidade normativa",
    fullDesc:
      "Elaboração de laudos técnicos conforme NR-10, SPDA, e outras normas regulamentadoras. Garantimos documentação completa e conformidade legal.",
    benefits: [
      "Conformidade com legislação",
      "Documentação técnica completa",
      "Inspeções periódicas",
      "Certificação profissional",
    ],
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Iluminação Residencial",
    shortDesc: "Projetos e instalação de iluminação",
    fullDesc:
      "Projetos de iluminação moderna e eficiente para residências. Utilizamos tecnologias LED sustentáveis e design inovador.",
    benefits: [
      "Economia de energia",
      "Design moderno e personalizado",
      "Tecnologia LED de qualidade",
      "Garantia de 2 anos",
    ],
  },
  {
    id: 5,
    icon: Zap,
    title: "Serviços Eletrônicos",
    shortDesc: "Reparo e automação de sistemas",
    fullDesc:
      "Reparo de placas eletrônicas, automação predial e industrial. Soluções completas para modernização de sistemas.",
    benefits: [
      "Diagnóstico eletrônico avançado",
      "Reparo de componentes",
      "Automação inteligente",
      "Suporte técnico contínuo",
    ],
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Eficiência Energética",
    shortDesc: "Otimização de consumo de energia",
    fullDesc:
      "Análise e otimização de sistemas elétricos para redução de consumo e custos operacionais.",
    benefits: [
      "Redução de até 30% no consumo",
      "Análise térmica infravermelha",
      "Relatório de eficiência",
      "Implementação de melhorias",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Soluções técnicas completas em elétrica e eletrônica para atender todas as suas necessidades.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesDetail.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.shortDesc}</p>
                    </div>

                    <div className="p-6">
                      <p className="text-foreground mb-6">{service.fullDesc}</p>

                      <h4 className="font-bold text-primary mb-3">Benefícios:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle
                              size={16}
                              className="text-accent flex-shrink-0 mt-1"
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contato">
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Solicitar Orçamento
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Como Trabalhamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  desc: "Análise completa de suas necessidades",
                },
                {
                  step: "02",
                  title: "Planejamento",
                  desc: "Desenvolvimento de solução personalizada",
                },
                {
                  step: "03",
                  title: "Execução",
                  desc: "Implementação com qualidade garantida",
                },
                {
                  step: "04",
                  title: "Suporte",
                  desc: "Acompanhamento e manutenção contínua",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-accent text-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Um Serviço Específico?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Entre em contato conosco para uma consulta gratuita e descubra a melhor solução para seu projeto.
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
