import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Media() {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Mídia & Imprensa</h1>
          <p className="text-white/60 text-lg font-serif italic">Participações em documentários, entrevistas e notícias.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        
        {/* Featured Documentary */}
        <div className="mb-20">
          <h2 className="text-2xl font-heading font-bold uppercase mb-8 border-l-4 border-accent pl-4">Destaque: Documentário Premiado</h2>
          <div className="relative aspect-video bg-black group cursor-pointer overflow-hidden rounded-sm">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop" 
              alt="Documentary Background" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="text-3xl font-bold text-white mb-2">Realidade Carcerária Feminina</h3>
              <p className="text-white/80">Participação especial como especialista em psicologia criminal.</p>
            </div>
          </div>
        </div>

        {/* Interviews Grid */}
        <h2 className="text-2xl font-heading font-bold uppercase mb-8 border-l-4 border-accent pl-4">Entrevistas Recentes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <div className="aspect-video bg-secondary rounded-sm relative group cursor-pointer overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white" />
                 </div>
              </div>
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">TV Justiça</p>
                <h3 className="text-lg font-bold leading-tight">Análise do Novo Pacote Anticrime e seus impactos na advocacia</h3>
                <p className="text-sm text-muted-foreground mt-2">15 de Outubro, 2024</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </Layout>
  );
}
