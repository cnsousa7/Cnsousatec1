import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a CNSOUSATEC</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Especialistas em soluções técnicas de elétrica e eletrônica com mais de uma década de experiência.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Nossa História
                </h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  A CNSOUSATEC foi fundada com a missão de oferecer soluções técnicas de excelência em elétrica e eletrônica. Desde o início, nosso compromisso tem sido com a qualidade, segurança e inovação.
                </p>
                <p className="text-foreground mb-4 leading-relaxed">
                  Ao longo dos anos, desenvolvemos uma reputação sólida no mercado, conquistando a confiança de centenas de clientes em diversos setores: industrial, comercial e residencial.
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Hoje, somos reconhecidos como uma empresa confiável, com profissionais altamente qualificados e certificados, sempre prontos para enfrentar os desafios mais complexos.
                </p>
                <Link href="/contato">
                  <Button className="bg-primary hover:bg-primary/90">
                    Trabalhe Conosco
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-primary font-bold text-lg">
                    Excelência em Soluções Técnicas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Nossa Filosofia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md border border-border p-8">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer soluções técnicas de excelência em elétrica e eletrônica, garantindo segurança, qualidade e inovação em cada projeto, superando as expectativas de nossos clientes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-border p-8">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a empresa de referência em soluções técnicas de elétrica e eletrônica, reconhecida pela excelência, confiabilidade e inovação em todo o Brasil.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-border p-8">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Integridade, segurança, qualidade, inovação, compromisso com o cliente e responsabilidade ambiental. Estes são os pilares que guiam todas as nossas ações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Por Que Nos Escolher?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Profissionais Certificados",
                  desc: "Equipe com certificações NR-10, CREA e outras qualificações técnicas reconhecidas.",
                },
                {
                  title: "Experiência Comprovada",
                  desc: "Mais de uma década de experiência em projetos complexos e variados.",
                },
                {
                  title: "Qualidade Garantida",
                  desc: "Todos os trabalhos são realizados com garantia e seguindo rigorosos padrões de qualidade.",
                },
                {
                  title: "Atendimento Personalizado",
                  desc: "Cada cliente recebe uma solução customizada de acordo com suas necessidades específicas.",
                },
                {
                  title: "Segurança em Primeiro Lugar",
                  desc: "Cumprimento total das normas de segurança e legislação vigente em todos os projetos.",
                },
                {
                  title: "Suporte Contínuo",
                  desc: "Disponibilidade de atendimento técnico e suporte mesmo após a conclusão do projeto.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Nossa Equipe
            </h2>
            <div className="bg-white rounded-lg shadow-md border border-border p-8 md:p-12">
              <Users className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center text-primary mb-4">
                Profissionais Qualificados
              </h3>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
                Nossa equipe é composta por engenheiros, técnicos e especialistas com ampla experiência em projetos de elétrica e eletrônica. Todos os profissionais possuem certificações atualizadas e estão em constante aperfeiçoamento.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">15+</p>
                  <p className="text-foreground font-medium">Profissionais Experientes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">500+</p>
                  <p className="text-foreground font-medium">Projetos Realizados</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">100%</p>
                  <p className="text-foreground font-medium">Satisfação dos Clientes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Certificações e Qualificações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "NR-10",
                  desc: "Segurança em Instalações e Serviços em Eletricidade",
                },
                {
                  title: "CREA",
                  desc: "Registro Profissional em Engenharia",
                },
                {
                  title: "ISO 9001",
                  desc: "Gestão da Qualidade",
                },
                {
                  title: "Responsabilidade Civil",
                  desc: "Seguro de Cobertura Profissional",
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center border border-border"
                >
                  <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Trabalhar Conosco?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Entre em contato conosco e descubra como podemos ajudar com suas necessidades técnicas.
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
