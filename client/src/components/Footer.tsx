import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-cnsousatec-glow.png"
                alt="CNSOUSATEC"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-lg object-cover shadow-md"
              />
              <h2 className="text-xl font-bold">CNSOUSATEC</h2>
            </div>
            <p className="text-sm opacity-90">
              Soluções técnicas em elétrica, hidráulica e eletrônica para
              Brasília e região.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-lg font-bold mb-4">Links Rápidos</h2>
            <ul className="space-y-2 text-sm">
              {[
                ["Início", "/"],
                ["Serviços", "/servicos"],
                ["Portfólio", "/portfolio"],
                ["Depoimentos", "/depoimentos"],
                ["Sobre", "/sobre"],
                ["Contato", "/contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="hover:opacity-80 transition-opacity">
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-bold mb-4">Contato</h2>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5561992743428"
                className="flex items-start gap-3 hover:opacity-80"
              >
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>(61) 99274-3428</span>
              </a>
              <a
                href="mailto:Cnsousatec@gmail.com"
                className="flex items-start gap-3 hover:opacity-80"
              >
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>Cnsousatec@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Brasília, DF - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
          <p>&copy; {currentYear} CNSOUSATEC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
