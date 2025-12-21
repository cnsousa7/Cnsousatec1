import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { trpc } from "@/lib/trpc";
import { Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const CATEGORIES = [
  "Painéis Elétricos",
  "Manutenção Industrial",
  "Laudos Técnicos",
  "Iluminação Residencial",
  "Serviços Eletrônicos",
  "Consultoria",
];

// Static portfolio data for static deployment
const STATIC_PROJECTS = [
  {
    id: 1,
    title: "Painel Elétrico Industrial",
    category: "Painéis Elétricos",
    description: "Montagem e configuração de painel elétrico de alta potência para indústria de alimentos.",
    results: "Redução de 20% no consumo de energia com otimização de circuitos.",
    featured: 1,
    imageUrl: "portfolio-paineis.jpg",
  },
  {
    id: 2,
    title: "Manutenção Preventiva - Fábrica Beta",
    category: "Manutenção Industrial",
    description: "Programa de manutenção preventiva em sistemas elétricos de grande porte.",
    results: "Zero paradas não planejadas por 12 meses consecutivos.",
    featured: 0,
    imageUrl: "portfolio-manutencao.jpg",
  },
  {
    id: 3,
    title: "Laudo Técnico NR-10",
    category: "Laudos Técnicos",
    description: "Inspeção completa e laudo de conformidade com normas NR-10 e SPDA.",
    results: "Empresa aprovada em auditoria de segurança com recomendações implementadas.",
    featured: 0,
    imageUrl: "portfolio-laudos.jpg",
  },
  {
    id: 4,
    title: "Iluminação Residencial Moderna",
    category: "Iluminação Residencial",
    description: "Projeto de iluminação LED com automação para residência de luxo.",
    results: "Redução de 60% no consumo de energia com iluminação de alta qualidade.",
    featured: 1,
    imageUrl: "portfolio-iluminacao.jpg",
  },
];

export default function PortfolioDynamic() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const projectsQuery = trpc.portfolio.list.useQuery();

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return STATIC_PROJECTS;
    return STATIC_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nosso Portfólio
            </h1>
            <p className="text-lg opacity-95">
              Conheça os projetos que realizamos com excelência e dedicação
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white py-8 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-4 mb-4">
              <Filter size={20} className="text-primary" />
              <h2 className="text-lg font-bold text-primary">Filtrar por Categoria</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                Todos os Projetos
              </Button>
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    {/* Project Image */}
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Sem imagem</span>
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {project.results && (
                        <div className="bg-muted p-4 rounded-lg mb-4">
                          <p className="text-sm font-semibold text-primary mb-1">
                            Resultados:
                          </p>
                          <p className="text-sm text-foreground">
                            {project.results}
                          </p>
                        </div>
                      )}

                      {project.featured === 1 && (
                        <div className="bg-accent/10 border border-accent px-3 py-2 rounded text-xs font-bold text-accent text-center">
                          ⭐ Projeto em Destaque
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6"
                >
                  Ver Todos os Projetos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interessado em Trabalhar Conosco?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Veja como podemos ajudar seu projeto com nossa experiência e expertise.
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
