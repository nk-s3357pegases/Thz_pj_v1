import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import stockImage from '@assets/stock_images/professional_female__14e64741.jpg';

export default function About() {
  return (
    <Layout>
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Sobre</h1>
          <p className="text-muted-foreground text-lg font-serif italic">Trajetória de excelência e dedicação.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24">
              <img 
                src={stockImage} 
                alt="Thaís Zanetti" 
                className="w-full h-auto shadow-lg mb-8 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="text-accent font-serif text-xl italic mb-2">Thaís Zanetti</h3>
                <p className="text-sm text-white/70 mb-4">OAB/RS XXXXX</p>
                <Button className="w-full bg-accent text-primary hover:bg-white rounded-none">
                  Baixar Currículo Completo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 uppercase border-l-4 border-accent pl-4">Formação Acadêmica</h2>
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-lg font-bold">Mestre em Ciências Criminais</h3>
                  <p className="text-muted-foreground">Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS (2010)</p>
                  <p className="text-sm text-accent mt-1">Aprovada com voto de louvor</p>
                </div>
                <Separator />
                <div className="group">
                  <h3 className="text-lg font-bold">Especialista em Filosofia</h3>
                  <p className="text-muted-foreground">Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS (2011)</p>
                  <p className="text-sm text-accent mt-1">Grau máximo</p>
                </div>
                <Separator />
                <div className="group">
                  <h3 className="text-lg font-bold">Especialista em Ciências Criminais</h3>
                  <p className="text-muted-foreground">Rede Metodista de Educação do Sul - IPA (2011)</p>
                  <p className="text-sm text-accent mt-1">Grau máximo</p>
                </div>
                <Separator />
                <div className="group">
                  <h3 className="text-lg font-bold">Graduação em Direito</h3>
                  <p className="text-muted-foreground">Universidade do Vale do Rio dos Sinos (2007)</p>
                </div>
                 <Separator />
                <div className="group">
                  <h3 className="text-lg font-bold">Graduação em Psicologia</h3>
                  <p className="text-muted-foreground">Formação complementar estratégica para atuação em Direito Penal e Compliance.</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h2 className="text-2xl font-heading font-bold mb-6 uppercase border-l-4 border-accent pl-4">Atuação Profissional</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com mais de 20 anos de experiência, Thaís Zanetti consolidou sua carreira atuando em casos de alta complexidade no Direito Penal Econômico e Empresarial. Sua abordagem técnica e combativa é reconhecida nacionalmente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Além da advocacia, exerce a docência em cursos de graduação e pós-graduação, contribuindo para a formação de novos juristas e para o debate acadêmico sobre as ciências criminais no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
