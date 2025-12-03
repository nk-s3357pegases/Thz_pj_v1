import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Scale, Shield, Users } from "lucide-react";
import stockImage from '@assets/stock_images/professional_female__14e64741.jpg';
import officeImage from '@assets/stock_images/minimalist_law_offic_d074c503.jpg';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Minimalist abstract background or texture could go here */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center pt-20 md:pt-0">
          <div className="order-2 md:order-1 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <h2 className="text-accent font-serif italic text-xl md:text-2xl mb-6">
              Advogada Criminalista & Psicóloga
            </h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 tracking-tight">
              Direito Penal e <br/>
              <span className="text-white/90">Gestão de Risco Corporativo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 font-light leading-relaxed border-l-2 border-accent pl-6">
              Excelência acadêmica aliada a mais de 20 anos de prática jurídica, docência e pesquisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-semibold transition-all"
                onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
              >
                Fale no WhatsApp
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 rounded-none h-14 px-8 text-sm uppercase tracking-widest font-semibold"
                >
                  Entrar em Contato
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[60vh] md:h-[85vh] w-full animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="absolute inset-0 bg-accent/10 rounded-sm translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src={stockImage} 
              alt="Thaís Zanetti" 
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Summary of Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 uppercase tracking-tight">Áreas de Atuação</h2>
              <p className="text-muted-foreground font-serif italic">Expertise técnica e acadêmica</p>
            </div>
            <Link href="/atuacao">
              <a className="text-sm uppercase tracking-widest font-semibold hover:text-accent flex items-center gap-2 mt-4 md:mt-0">
                Ver todas as áreas <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scale,
                title: "Direito Penal Econômico",
                desc: "Crimes tributários, lavagem de capitais e crimes contra o sistema financeiro."
              },
              {
                icon: Shield,
                title: "Compliance Criminal",
                desc: "Programas de integridade e investigações internas corporativas."
              },
              {
                icon: Users,
                title: "Risco & Gênero",
                desc: "Consultoria em assédio e compliance de gênero com abordagem psicológica."
              },
              {
                icon: BookOpen,
                title: "Crimes Digitais",
                desc: "Crimes contra a honra digital, reputação e concorrência desleal."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-none hover:bg-secondary/50 transition-colors group cursor-pointer">
                <CardContent className="pt-6 px-4">
                  <item.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Formation Highlight */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 hidden lg:block skew-x-12 translate-x-32"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border border-accent text-accent px-4 py-1 text-xs uppercase tracking-widest mb-6">
                Diferencial Único
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                Direito + Psicologia: <br/>
                <span className="text-muted-foreground font-serif italic text-3xl md:text-4xl font-normal">Uma abordagem interdisciplinar</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A dupla formação em Direito e Psicologia permite uma atuação estratégica única na gestão de crises complexas, especialmente em investigações corporativas e casos sensíveis.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Não se trata apenas de defesa legal, mas de uma compreensão profunda do comportamento humano e das dinâmicas institucionais.
              </p>
              <Link href="/sobre">
                <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                  Conheça a Trajetória
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-background shadow-xl p-4 rotate-3 transition-transform hover:rotate-0 duration-500">
                 <img src={officeImage} alt="Office" className="w-full h-full object-cover filter sepia-[.2]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Authority Section (Placeholder for now, keeping it simple) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 uppercase">Autoridade Acadêmica</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Mestre em Ciências Criminais, Especialista em Filosofia e autora de diversas obras jurídicas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
              <p className="uppercase text-xs tracking-widest font-semibold">Anos de Docência</p>
            </div>
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h3 className="text-4xl font-bold text-accent mb-2">Doc</h3>
              <p className="uppercase text-xs tracking-widest font-semibold">Participação em Documentário</p>
            </div>
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h3 className="text-4xl font-bold text-accent mb-2">STJ</h3>
              <p className="uppercase text-xs tracking-widest font-semibold">Citações em Cortes Superiores</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
         <div className="container mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Agende uma Consulta</h2>
           <p className="text-white/60 max-w-xl mx-auto mb-10">
             Atendimento presencial em Porto Alegre e online para todo o Brasil.
           </p>
           <Button 
             className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-semibold"
             onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
           >
             Iniciar Atendimento
           </Button>
         </div>
      </section>
    </Layout>
  );
}
