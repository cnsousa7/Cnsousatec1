import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-cnsousatec-glow.png"
                alt="CNSOUSATEC Logo"
                className="h-14 w-14 rounded-lg object-cover shadow-md"
              />
              <h3 className="text-xl font-bold">CNSOUSATEC</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Soluções Técnicas em Elétrica e Eletrônica com excelência, segurança e inovação.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:opacity-80 transition-opacity">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:opacity-80 transition-opacity">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="/depoimentos" className="hover:opacity-80 transition-opacity">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:opacity-80 transition-opacity">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">(61) 99274-3428</p>
                  <p className="text-xs opacity-80">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <p>Cnsousatec@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p>Brasília, DF - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-bold mb-4">Certificações e Qualificações</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <p className="font-bold text-sm">NR-10</p>
              <p className="text-xs opacity-80">Segurança em Eletricidade</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <p className="font-bold text-sm">CREA</p>
              <p className="text-xs opacity-80">Registro Profissional</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <p className="font-bold text-sm">ISO 9001</p>
              <p className="text-xs opacity-80">Qualidade</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <p className="font-bold text-sm">Segurado</p>
              <p className="text-xs opacity-80">Responsabilidade Civil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
          <p>
            &copy; {currentYear} CNSOUSATEC. Todos os direitos reservados. | Soluções Técnicas em Elétrica e Eletrônica
          </p>
        </div>
      </div>
    </footer>
  );
}
