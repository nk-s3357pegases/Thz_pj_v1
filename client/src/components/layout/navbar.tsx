import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/atuacao", label: "Atuação" },
    { href: "/publicacoes", label: "Publicações" },
    { href: "/midia", label: "Mídia" },
    { href: "/citacoes", label: "Citações" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tighter uppercase">
            Thaís<span className="text-accent">.</span>Zanetti
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent uppercase tracking-widest",
                  location === link.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-background rounded-none px-6 tracking-widest uppercase text-xs"
            onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
          >
            Contato
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
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
