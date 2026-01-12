import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Depoimentos", href: "/depoimentos" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="logo-cnsousatec-glow.png"
                alt="CNSOUSATEC Logo"
                className="h-14 w-auto rounded-lg shadow-md"
              />
              <div className="hidden sm:block">
                <h1 className="text-primary font-bold text-lg">CNSOUSATEC</h1>
                <p className="text-xs text-muted-foreground">Soluções Técnicas</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-foreground hover:text-primary transition-colors font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5561992743428"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              title="Ligar para CNSOUSATEC"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(61) 99274-3428</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block py-2 px-4 text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-border mt-2">
              <a
                href="tel:+5561992743428"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">(61) 99274-3428</span>
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5561992743428?text=Olá%2C%20gostaria%20de%20um%20orçamento%20para%20serviços%20elétricos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </header>
  );
}
