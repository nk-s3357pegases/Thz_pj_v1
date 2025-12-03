import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-2xl font-heading font-bold tracking-tighter uppercase mb-6">
              Thaís<span className="text-accent">.</span>Zanetti
            </h2>
            <p className="text-primary-foreground/60 max-w-md mb-8 font-light leading-relaxed">
              Advocacia Criminal e Gestão de Risco Corporativo com excelência acadêmica. 
              Atuação nacional com sede em Porto Alegre.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
            </div>
          </div>

          <div>
            <h3 className="text-accent font-serif italic text-lg mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/"><a className="hover:text-accent transition-colors">Início</a></Link></li>
              <li><Link href="/sobre"><a className="hover:text-accent transition-colors">Sobre</a></Link></li>
              <li><Link href="/atuacao"><a className="hover:text-accent transition-colors">Áreas de Atuação</a></Link></li>
              <li><Link href="/publicacoes"><a className="hover:text-accent transition-colors">Publicações</a></Link></li>
              <li><Link href="/midia"><a className="hover:text-accent transition-colors">Mídia</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-serif italic text-lg mb-6">Contato</h3>
            <div className="space-y-4 text-sm text-primary-foreground/70">
              <p>
                <strong className="block text-white mb-1 uppercase text-xs tracking-wider">Endereço</strong>
                Av. Carlos Gomes, 815 - Sala 309<br />
                Bairro Bela Vista - Porto Alegre - RS<br />
                CEP 90480-003
              </p>
              <p>
                <strong className="block text-white mb-1 uppercase text-xs tracking-wider">Telefone</strong>
                +55 51 99978-5539
              </p>
              <p>
                <strong className="block text-white mb-1 uppercase text-xs tracking-wider">CNPJ</strong>
                49.156.588/0001-66
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
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
