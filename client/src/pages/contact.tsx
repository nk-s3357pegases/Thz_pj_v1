import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
       <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4">Contato</h1>
          <p className="text-white/60 text-lg font-serif italic">Atendimento personalizado e confidencial.</p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold uppercase mb-6">Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Para agendar uma consulta ou solicitar informações sobre palestras e treinamentos, entre em contato através dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-sm tracking-wider mb-1">Telefone / WhatsApp</h3>
                    <p className="text-muted-foreground hover:text-accent transition-colors cursor-pointer" onClick={() => window.open("https://wa.me/5551999785539", "_blank")}>
                      +55 51 99978-5539
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-sm tracking-wider mb-1">Escritório</h3>
                    <p className="text-muted-foreground">
                      Av. Carlos Gomes, 815 - Sala 309<br />
                      Bairro Bela Vista<br />
                      Porto Alegre - RS, 90480-003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-sm tracking-wider mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      contato@thaiszanetti.adv.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-secondary border-none shadow-none">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-lg mb-2">Atendimento Nacional</h3>
                <p className="text-muted-foreground text-sm">
                  Embora sediada em Porto Alegre, o escritório atua em todo o território nacional, com estrutura para atendimento online e parceiros em diversas capitais.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-heading font-bold uppercase mb-6">Envie uma Mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">Nome</label>
                  <Input id="name" placeholder="Seu nome completo" className="rounded-none border-input focus:border-accent h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium uppercase tracking-wider">Telefone</label>
                  <Input id="phone" placeholder="(DD) 99999-9999" className="rounded-none border-input focus:border-accent h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">Email</label>
                <Input id="email" type="email" placeholder="seu@email.com" className="rounded-none border-input focus:border-accent h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider">Assunto</label>
                 <select id="subject" className="flex h-12 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Selecione um assunto</option>
                    <option value="consultoria">Consultoria Jurídica</option>
                    <option value="palestra">Palestras e Eventos</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="outro">Outros</option>
                 </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">Mensagem</label>
                <Textarea id="message" placeholder="Descreva brevemente sua solicitação..." className="rounded-none border-input focus:border-accent min-h-[150px]" />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest font-bold">
                Enviar Mensagem
              </Button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  );
}
