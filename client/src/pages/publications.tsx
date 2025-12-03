import { Layout } from "@/components/layout/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Publications() {
  return (
    <Layout>
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Publicações</h1>
          <p className="text-muted-foreground text-lg font-serif italic">Produção intelectual e contribuição acadêmica.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for books/articles */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group cursor-pointer hover:border-accent transition-all duration-300">
                <CardContent className="p-8">
                  <Badge variant="outline" className="mb-4 border-accent text-accent uppercase text-[10px] tracking-wider rounded-none">Artigo Científico</Badge>
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                    A Inconstitucionalidade da Execução Provisória da Pena
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Publicado em: Revista Brasileira de Ciências Criminais, Vol. {100 + item}, 202{item}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    Uma análise aprofundada sobre os impactos constitucionais e sociais das decisões recentes dos tribunais superiores acerca da presunção de inocência.
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </Layout>
  );
}
