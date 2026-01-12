import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles, Scissors, Paintbrush, Eye, Droplet } from "lucide-react";

const courses = [
    {
        icon: Sparkles,
        title: "Manicure Profissional",
        description: "Domine todas as técnicas de manicure e pedicure, desde o básico até nail art avançada.",
        duration: "3 meses",
        highlights: ["Esmaltação perfeita", "Nail art", "Alongamento de unhas"],
    },
    {
        icon: Scissors,
        title: "Cabeleireira Completa",
        description: "Aprenda cortes modernos, coloração, tratamentos capilares e penteados para qualquer ocasião.",
        duration: "6 meses",
        highlights: ["Cortes e escovação", "Colorimetria", "Penteados"],
    },
    {
        icon: Eye,
        title: "Designer de Sobrancelhas",
        description: "Especialize-se em design, micropigmentação e todas as técnicas de embelezamento de sobrancelhas.",
        duration: "2 meses",
        highlights: ["Design personalizado", "Henna e micropigmentação", "Laminação"],
    },
    {
        icon: Paintbrush,
        title: "Maquiagem Profissional",
        description: "Da maquiagem social à artística, aprenda a realçar a beleza natural de cada cliente.",
        duration: "4 meses",
        highlights: ["Maquiagem social", "Noivas", "Maquiagem artística"],
    },
    {
        icon: Droplet,
        title: "Depilação Especializada",
        description: "Técnicas modernas e seguras de depilação, incluindo cera, laser e métodos alternativos.",
        duration: "2 meses",
        highlights: ["Técnicas variadas", "Higiene e segurança", "Atendimento profissional"],
    },
];

const CoursesSection = () => {
    return (
        <section id="cursos" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-white-pure/60 text-sm uppercase tracking-widest mb-2 block">
                        Formação Profissional Completa
                    </span>
                    <h2 className="mb-4 text-white-pure">
                        Nossos <span className="text-gradient-gold">Cursos</span>
                    </h2>
                    <p className="text-xl text-white-pure/80 max-w-3xl mx-auto">
                        Escolha sua área de atuação e torne-se uma profissional certificada internacionalmente
                    </p>
                    <p className="text-white-pure/50 mt-4 text-sm">
                        Todos os cursos incluem certificado reconhecido • Material didático • Prática com modelos reais
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => {
                        const Icon = course.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold group animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-6">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>

                                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <span>Duração: {course.duration}</span>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {course.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full border-primary/30 text-primary hover:bg-primary/10"
                                    >
                                        Saiba Mais
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
