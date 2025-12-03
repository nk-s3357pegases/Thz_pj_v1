import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Scale, Shield, Users, MapPin, Award, FileText } from "lucide-react";
import heroPortrait from '@assets/image_1764723438021.png';
import stjPhoto from '@assets/image_1764722976853.png';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Dark & Sophisticated */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(211,175,55,0.08),transparent_50%)]"></div>
           <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 pt-24 md:pt-0">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="md:col-span-7 order-2 md:order-1 animate-in slide-in-from-left-10 duration-1000 fade-in relative">
              {/* Decorative Line */}
              <div className="w-24 h-[1px] bg-accent mb-8"></div>
              
              <h2 className="text-accent font-serif italic text-xl md:text-2xl mb-4 tracking-wide">
                Advocacia Criminal & Psicologia Jurídica
              </h2>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-8 tracking-tight">
                Defesa Técnica <br/>
                <span className="text-white/80 font-serif italic font-normal">de Alta Complexidade</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-12 font-light leading-relaxed">
                Atuação estratégica em Direito Penal Econômico e Gestão de Crise Corporativa. Mais de 20 anos de excelência acadêmica e prática forense.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(211,175,55,0.3)] hover:shadow-[0_0_30px_rgba(211,175,55,0.5)]"
                  onClick={() => window.open("https://wa.me/5551999785539", "_blank")}
                >
                  Agendar Consulta
                </Button>
                <Link href="/sobre">
                   <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white hover:text-primary rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold backdrop-blur-sm"
                  >
                    Conhecer Trajetória
                  </Button>
                </Link>
              </div>

              {/* Credentials Strip */}
              <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 text-center md:text-left">
                 <div>
                    <h4 className="text-2xl font-bold text-white">20+</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Anos de Experiência</p>
                 </div>
                 <div>
                    <h4 className="text-2xl font-bold text-white">MSc</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Mestre em C. Criminais</p>
                 </div>
                 <div>
                    <h4 className="text-2xl font-bold text-white">Nacional</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Atuação em todo Brasil</p>
                 </div>
              </div>
            </div>
            
            {/* Hero Image - Pink Blazer Portrait */}
            <div className="md:col-span-5 order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full animate-in slide-in-from-bottom-10 duration-1000 fade-in delay-200 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md h-full">
                {/* Frame Effect */}
                <div className="absolute top-4 right-4 w-full h-full border border-accent/30 hidden md:block"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 -z-10 hidden md:block"></div>
                
                <img 
                  src={heroPortrait} 
                  alt="Thaís Zanetti" 
                  className="w-full h-full object-cover object-top shadow-2xl"
                  style={{ boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume / Bio Section - Prominent */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-5 relative">
                <div className="bg-secondary p-8 md:p-12 border-l-4 border-accent">
                   <h3 className="font-heading font-bold text-2xl uppercase mb-6">Formação de Excelência</h3>
                   <ul className="space-y-6">
                      <li className="flex gap-4 items-start">
                         <Award className="w-6 h-6 text-accent shrink-0 mt-1" />
                         <div>
                            <h4 className="font-bold text-foreground">Mestre em Ciências Criminais</h4>
                            <p className="text-sm text-muted-foreground">PUCRS (2010) - Aprovada com Louvor</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <Award className="w-6 h-6 text-accent shrink-0 mt-1" />
                         <div>
                            <h4 className="font-bold text-foreground">Especialista em Filosofia</h4>
                            <p className="text-sm text-muted-foreground">PUCRS (2011) - Grau Máximo</p>
                         </div>
                      </li>
                      <li className="flex gap-4 items-start">
                         <Award className="w-6 h-6 text-accent shrink-0 mt-1" />
                         <div>
                            <h4 className="font-bold text-foreground">Psicóloga Graduada</h4>
                            <p className="text-sm text-muted-foreground">Formação complementar estratégica</p>
                         </div>
                      </li>
                   </ul>
                   <div className="mt-8 pt-6 border-t border-border">
                      <Link href="/publicacoes">
                        <a className="text-accent uppercase text-xs font-bold tracking-widest hover:underline flex items-center gap-2">
                           Ver Publicações Acadêmicas <ArrowRight className="w-3 h-3" />
                        </a>
                      </Link>
                   </div>
                </div>
             </div>
             
             <div className="md:col-span-7">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Sobre a Profissional</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                   Uma trajetória marcada pelo rigor técnico e pela defesa intransigente.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">
                   Thaís Zanetti não é apenas uma advogada; é uma estrategista jurídica com dupla formação. A psicologia aplicada ao direito penal permite uma leitura diferenciada de processos, testemunhas e cenários de crise.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                   Com forte atuação nos tribunais superiores e em casos de repercussão, o escritório se destaca pela discrição, combatividade e profundidade teórica em cada defesa.
                </p>
                <div className="flex gap-4">
                   <Link href="/sobre">
                      <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-widest text-xs h-12 px-8">
                         Biografia Completa
                      </Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* National Acting - STJ Photo Section */}
      <section className="relative py-32 bg-zinc-900 text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
               src={stjPhoto} 
               alt="Atuação no STJ" 
               className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
               <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-accent uppercase tracking-widest text-sm font-bold">Presença Nacional</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                  Atuação nos Tribunais Superiores
               </h2>
               <p className="text-xl text-white/70 mb-10 leading-relaxed font-light border-l-2 border-accent pl-6">
                  Sede em Porto Alegre, com atuação consolidada em Brasília e em todo o território nacional. Expertise na condução de recursos e sustentações orais perante o STJ e STF.
               </p>
               <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                     <h4 className="text-white font-bold uppercase mb-2">Brasília</h4>
                     <p className="text-white/50 text-sm">STJ, STF e Tribunais Regionais</p>
                  </div>
                  <div>
                     <h4 className="text-white font-bold uppercase mb-2">Online</h4>
                     <p className="text-white/50 text-sm">Atendimento digital completo</p>
                  </div>
               </div>
               <Link href="/citacoes">
                  <Button className="bg-white text-black hover:bg-accent hover:text-black rounded-none px-8 h-12 uppercase tracking-widest font-bold text-xs">
                     Ver Citações em Tribunais
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* Areas of Expertise - Cards */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase tracking-tight">Áreas de Atuação</h2>
            <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground font-serif italic text-lg">
               Especialização técnica para demandas complexas e sensíveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scale,
                title: "Direito Penal Econômico",
                desc: "Defesa em crimes tributários, financeiros e lavagem de capitais."
              },
              {
                icon: Shield,
                title: "Compliance Criminal",
                desc: "Programas de integridade e gestão de risco corporativo."
              },
              {
                icon: Users,
                title: "Consultoria de Gênero",
                desc: "Abordagem psicológica e jurídica para casos de assédio."
              },
              {
                icon: BookOpen,
                title: "Crimes Digitais",
                desc: "Proteção da reputação e crimes contra a honra no ambiente digital."
              }
            ].map((item, index) => (
              <Card key={index} className="border border-border/50 bg-white shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
                <CardContent className="pt-8 px-6 pb-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                     <item.icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                  <Link href="/atuacao">
                     <a className="text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        Saiba Mais <ArrowRight className="w-3 h-3" />
                     </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
