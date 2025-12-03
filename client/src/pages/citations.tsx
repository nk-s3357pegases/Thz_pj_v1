import { Layout } from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Citations() {
  return (
    <Layout>
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Citações em Tribunais</h1>
          <p className="text-muted-foreground text-lg font-serif italic">Reconhecimento da tese jurídica em cortes superiores.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="space-y-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="border-l-4 border-l-accent border-y-0 border-r-0 rounded-none shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-bold text-2xl text-foreground">HC 123.456/RS</span>
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 uppercase tracking-wider font-semibold">STJ</span>
                </div>
                <p className="font-serif italic text-muted-foreground text-lg mb-6">
                  "Conforme leciona Thaís Zanetti em sua obra sobre garantismo penal, a aplicação da medida cautelar deve observar estritamente os princípios da necessidade e adequação..."
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Relator:</strong> Min. Sebastião Reis Júnior</p>
                  <p><strong className="text-foreground">Data de Julgamento:</strong> 20/05/2024</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
