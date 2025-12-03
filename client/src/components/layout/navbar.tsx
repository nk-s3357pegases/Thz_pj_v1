import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logoImage from "@assets/logos/logo_sem_fundo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/atuacao", label: "Atuação" },
    { href: "/publicacoes", label: "Publicações" },
    { href: "/midia", label: "Mídia" },
    { href: "/citacoes", label: "Citações" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 border-b border-border/40 shadow-sm text-foreground">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="group block">
            <img 
              src={logoImage} 
              alt="Thaís Zanetti" 
              className="w-24 md:w-32 h-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-xs font-medium transition-colors hover:text-accent uppercase tracking-widest relative py-2 text-foreground/80",
                  location === link.href ? "text-accent" : "",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-white rounded-none px-6 tracking-widest uppercase text-xs transition-all duration-300 bg-transparent"
            onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
          >
            Contato
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-medium transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button 
            className="bg-accent text-background hover:bg-accent/90 w-full rounded-none mt-4"
            onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
          >
            Fale Conosco
          </Button>
        </div>
      )}
    </nav>
  );
}
