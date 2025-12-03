import { Link } from "wouter";
import logoImage from "@assets/logos/logo_sem_fundo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Thaís Zanetti" 
                className="w-32 md:w-48 h-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/60 max-w-md mb-6 font-light leading-relaxed text-sm">
              Advocacia Criminal e Gestão de Risco Corporativo com excelência acadêmica. 
              Atuação nacional com sede em Porto Alegre.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
            </div>
          </div>

          <div>
            <h3 className="text-accent font-serif italic text-base mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/"><a className="hover:text-accent transition-colors">Início</a></Link></li>
              <li><Link href="/sobre"><a className="hover:text-accent transition-colors">Sobre</a></Link></li>
              <li><Link href="/atuacao"><a className="hover:text-accent transition-colors">Áreas de Atuação</a></Link></li>
              <li><Link href="/publicacoes"><a className="hover:text-accent transition-colors">Publicações</a></Link></li>
              <li><Link href="/midia"><a className="hover:text-accent transition-colors">Mídia</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-serif italic text-base mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>
                <strong className="block text-white mb-1 uppercase text-[10px] tracking-wider">Endereço</strong>
                Av. Carlos Gomes, 815 - Sala 309<br />
                Bairro Bela Vista - Porto Alegre - RS<br />
                CEP 90480-003
              </p>
              <p>
                <strong className="block text-white mb-1 uppercase text-[10px] tracking-wider">Telefone</strong>
                +55 51 99978-5539
              </p>
              <p>
                <strong className="block text-white mb-1 uppercase text-[10px] tracking-wider">CNPJ</strong>
                49.156.588/0001-66
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Thaís Zanetti. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
