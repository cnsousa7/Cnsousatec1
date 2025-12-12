import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl">
              Estamos prontos para ajudar com suas necessidades. Fale conosco hoje mesmo!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="bg-white rounded-lg shadow-md border border-border p-6">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-2">(61) 99274-3428</p>
                <p className="text-sm text-muted-foreground">
                  Disponível de segunda a sexta, 8h às 18h
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-border p-6">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">E-mail</h3>
                <p className="text-muted-foreground mb-2">
                  Cnsousatec@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  Responderemos em até 24 horas
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-border p-6">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Localização</h3>
                <p className="text-muted-foreground mb-2">Brasília, DF - Brasil</p>
                <p className="text-sm text-muted-foreground">
                  Atendimento em todo o Brasil
                </p>
              </div>
            </div>

            {/* Contact Form and WhatsApp */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white rounded-lg shadow-md border border-border p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Envie uma Mensagem
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-medium">
                      ✓ Mensagem enviada com sucesso!
                    </p>
                    <p className="text-green-700 text-sm mt-2">
                      Entraremos em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(61) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Serviço *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="Painéis Elétricos">Painéis Elétricos</option>
                        <option value="Manutenção Industrial">
                          Manutenção Industrial
                        </option>
                        <option value="Laudos Técnicos">Laudos Técnicos</option>
                        <option value="Iluminação Residencial">
                          Iluminação Residencial
                        </option>
                        <option value="Serviços Eletrônicos">
                          Serviços Eletrônicos
                        </option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Descreva sua necessidade..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </div>

              {/* WhatsApp and Additional Info */}
              <div className="space-y-6">
                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/5561992743428?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20serviços%20elétricos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">Fale Conosco no WhatsApp</h3>
                  <p className="mb-6 opacity-95">
                    Resposta rápida e atendimento personalizado. Clique para enviar uma mensagem!
                  </p>
                  <Button
                    className="bg-white text-green-600 hover:bg-gray-100 font-bold w-full"
                  >
                    Abrir WhatsApp
                  </Button>
                </a>

                {/* Hours Card */}
                <div className="bg-white rounded-lg shadow-md border border-border p-6">
                  <Clock className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Segunda a Sexta:
                      </span>{" "}
                      8h às 18h
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Sábado:</span>{" "}
                      8h às 12h
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Domingo:</span>{" "}
                      Fechado
                    </p>
                  </div>
                </div>

                {/* Emergency Card */}
                <div className="bg-accent/10 rounded-lg border border-accent p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Emergências 24/7
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para situações de emergência, ligue para nosso número de atendimento:
                  </p>
                  <a
                    href="tel:+5561992743428"
                    className="text-accent font-bold text-lg hover:underline"
                  >
                    (61) 99274-3428
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
