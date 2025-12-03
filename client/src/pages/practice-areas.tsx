import { Layout } from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, ShieldCheck, GlobeLock } from "lucide-react";

export default function PracticeAreas() {
  const areas = [
    {
      id: "penal-economico",
      title: "Direito Penal Econômico",
      icon: Scale,
      description: "Defesa técnica especializada em crimes contra a ordem tributária e econômica.",
      details: [
        "Crimes Tributários (Sonegação, Apropriação Indébita Previdenciária)",
        "Lavagem de Capitais",
        "Crimes Contra o Sistema Financeiro Nacional",
        "Evasão de Divisas",
        "Gestão Fraudulenta"
      ]
    },
    {
      id: "compliance",
      title: "Compliance Criminal & Investigações",
      icon: Building2,
      description: "Prevenção de riscos e gestão de crises corporativas.",
      details: [
        "Implementação de Programas de Integridade",
        "Investigação Defensiva Corporativa",
        "Análise Comportamental Forense",
        "Gestão de Crises",
        "Due Diligence Criminal"
      ]
    },
    {
      id: "crimes-digitais",
      title: "Crimes Digitais & Reputação",
      icon: GlobeLock,
      description: "Proteção jurídica no ambiente digital e crimes contra a honra.",
      details: [
        "Crimes contra a honra em redes sociais",
        "Violação de segredo industrial",
        "Concorrência desleal",
        "Remoção de conteúdo ilícito",
        "Persecução penal de crimes cibernéticos"
      ]
    },
    {
      id: "risco-genero",
      title: "Risco Corporativo & Gênero",
      icon: ShieldCheck,
      description: "Consultoria especializada em assédio e compliance de gênero.",
      details: [
        "Consultoria para casos de assédio sexual e moral",
        "Compliance de Gênero",
        "Treinamento corporativo e conscientização",
        "Gestão de denúncias internas (Canal de Ética)",
        "Abordagem psicológica e jurídica integrada"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Áreas de Atuação</h1>
          <p className="text-white/60 text-lg font-serif italic">Expertise técnica para casos complexos.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="grid gap-12">
          {areas.map((area, index) => (
            <div key={area.id} className={`grid md:grid-cols-12 gap-8 items-start ${index !== areas.length - 1 ? "border-b border-border pb-12" : ""}`}>
              <div className="md:col-span-4">
                <div className="bg-secondary p-6 inline-block mb-4">
                  <area.icon className="w-12 h-12 text-accent" />
                </div>
                <h2 className="text-2xl font-heading font-bold uppercase mb-4">{area.title}</h2>
                <p className="text-muted-foreground italic font-serif">{area.description}</p>
              </div>
              
              <div className="md:col-span-8">
                <Card className="border-none shadow-sm bg-secondary/30">
                  <CardContent className="pt-6">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {area.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-foreground/80 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
