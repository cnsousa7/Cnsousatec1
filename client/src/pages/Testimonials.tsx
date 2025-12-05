import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  service: string;
  text: string;
  rating: number;
}

const allTestimonials: Testimonial[] = [
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
  {
    id: 5,
    name: "Roberto Ferreira",
    company: "Fábrica Epsilon",
    service: "Painéis Elétricos",
    text: "Equipe profissional e comprometida. Trabalho realizado dentro do cronograma. Voltaremos a contratar com certeza.",
    rating: 5,
  },
  {
    id: 6,
    name: "Fernanda Lima",
    company: "Residência Zeta",
    service: "Iluminação Residencial",
    text: "Adorei o resultado! A iluminação ficou moderna e elegante. O custo-benefício foi excelente.",
    rating: 5,
  },
  {
    id: 7,
    name: "Pedro Mendes",
    company: "Empresa Theta",
    service: "Serviços Eletrônicos",
    text: "Reparos rápidos e eficientes. Equipe conhecedora do assunto. Recomendo para qualquer necessidade eletrônica.",
    rating: 5,
  },
  {
    id: 8,
    name: "Juliana Costa",
    company: "Indústria Iota",
    service: "Laudos Técnicos",
    text: "Profissionais competentes e atenciosos. Documentação completa e dentro das normas. Excelente trabalho!",
    rating: 5,
  },
];

const serviceFilters = [
  "Todos",
  "Painéis Elétricos",
  "Manutenção Industrial",
  "Laudos Técnicos",
  "Iluminação Residencial",
  "Serviços Eletrônicos",
];

export default function Testimonials() {
  const [selectedService, setSelectedService] = useState("Todos");

  const filteredTestimonials =
    selectedService === "Todos"
      ? allTestimonials
      : allTestimonials.filter((t) => t.service === selectedService);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos de Clientes
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Veja o que nossos clientes satisfeitos dizem sobre nossos serviços.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container">
            <h2 className="text-lg font-bold text-primary mb-6">
              Filtrar por Serviço:
            </h2>
            <div className="flex flex-wrap gap-3">
              {serviceFilters.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedService === service
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {service}
                  {service !== "Todos" && (
                    <span className="ml-2 text-sm">
                      ({allTestimonials.filter((t) => t.service === service).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border p-6"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-accent font-medium mt-2">
                      Serviço: {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum depoimento encontrado para este serviço.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {allTestimonials.length}+
                </p>
                <p className="text-lg opacity-90">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {allTestimonials.reduce((acc, t) => acc + t.rating, 0) /
                    allTestimonials.length}
                </p>
                <p className="text-lg opacity-90">Avaliação Média</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {new Set(allTestimonials.map((t) => t.service)).size}
                </p>
                <p className="text-lg opacity-90">Tipos de Serviço</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
