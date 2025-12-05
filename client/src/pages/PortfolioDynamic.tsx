import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Filter, Loader2 } from "lucide-react";
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

export default function PortfolioDynamic() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const projectsQuery = trpc.portfolio.list.useQuery();

  const filteredProjects = useMemo(() => {
    if (!projectsQuery.data) return [];
    if (!selectedCategory) return projectsQuery.data;
    return projectsQuery.data.filter((p) => p.category === selectedCategory);
  }, [projectsQuery.data, selectedCategory]);

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
            {projectsQuery.isLoading ? (
              <div className="flex justify-center items-center py-24">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : filteredProjects.length > 0 ? (
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
