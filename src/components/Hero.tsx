import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        course: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.whatsapp && formData.course) {
            toast.success("Recebemos sua mensagem! Em breve entraremos em contato.");
            setFormData({ name: "", whatsapp: "", course: "" });
        } else {
            toast.error("Por favor, preencha todos os campos.");
        }
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Profissional de beleza em ação"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white-pure/10 border border-white-pure/30 mb-6">
                            <Sparkles className="w-4 h-4 text-white-pure" />
                            <span className="text-sm text-white-pure font-medium">Certificação Internacional</span>
                        </div>

                        <h1 className="mb-6 leading-tight text-white-pure">
                            Transforme sua <span className="text-gradient-gold">paixão pela beleza</span> em uma carreira internacional
                        </h1>

                        <p className="text-xl text-white-pure/90 mb-8 leading-relaxed">
                            Na Ellos Academia de Beleza, formamos profissionais completas com certificação reconhecida mundialmente.
                            Seja manicure, cabeleireira, designer de sobrancelhas ou maquiadora – sua jornada de sucesso começa aqui.
                        </p>

                        <p className="text-white-pure/70 mb-6 italic">
                            "Mais de 5.000 alunas formadas e transformando vidas através da beleza profissional"
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white-pure/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-white-pure rounded-full" />
                                <span className="text-white-pure">Aulas 100% Práticas</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white-pure/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-white-pure rounded-full" />
                                <span className="text-white-pure">Professoras Especialistas</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white-pure/10 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-white-pure rounded-full" />
                                <span className="text-white-pure">Certificado Internacional</span>
                            </div>
                        </div>

                        <p className="text-sm text-white-pure/60">
                            ✨ Turmas com vagas limitadas • Material incluso • Suporte pós-curso
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-scale-in">
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
                            <h3 className="text-2xl font-bold mb-2 text-gradient-gold">
                                Solicite seu Orçamento
                            </h3>
                            <p className="text-foreground/60 mb-6">
                                Preencha o formulário e receba todas as informações sobre nossos cursos
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-input border-border text-foreground"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="tel"
                                        placeholder="WhatsApp (com DDD)"
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        className="bg-input border-border text-foreground"
                                    />
                                </div>

                                <div>
                                    <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                                        <SelectTrigger className="bg-input border-border text-foreground">
                                            <SelectValue placeholder="Selecione o curso de interesse" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="manicure">Manicure Profissional</SelectItem>
                                            <SelectItem value="cabeleireira">Cabeleireira Completa</SelectItem>
                                            <SelectItem value="sobrancelhas">Designer de Sobrancelhas</SelectItem>
                                            <SelectItem value="maquiagem">Maquiagem Profissional</SelectItem>
                                            <SelectItem value="depilacao">Depilação Especializada</SelectItem>
                                            <SelectItem value="todos">Todos os Cursos</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
                                    size="lg"
                                >
                                    Receber Informações
                                </Button>

                                <p className="text-xs text-center text-foreground/50">
                                    Seus dados estão seguros conosco
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
