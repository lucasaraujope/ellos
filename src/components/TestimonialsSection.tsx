import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Juliana Santos",
        course: "Manicure Profissional",
        text: "A Ellos mudou minha vida! Hoje tenho meu próprio salão e atendo mais de 30 clientes por semana. O certificado internacional abriu portas que eu nem imaginava.",
        rating: 5,
        image: "👩🏽",
    },
    {
        name: "Mariana Costa",
        course: "Designer de Sobrancelhas",
        text: "As professoras são incríveis! Aprendi técnicas avançadas e hoje sou referência na minha cidade. Minha agenda está sempre lotada.",
        rating: 5,
        image: "👩🏻",
    },
    {
        name: "Carla Ferreira",
        course: "Cabeleireira Completa",
        text: "Investi no curso e o retorno veio rápido. Já no primeiro mês consegui pagar o investimento. Recomendo demais a Ellos!",
        rating: 5,
        image: "👩🏾",
    },
    {
        name: "Amanda Silva",
        course: "Maquiagem Profissional",
        text: "Realização profissional define! Me tornei maquiadora de noivas e eventos. A formação da Ellos me deu toda a base que eu precisava.",
        rating: 5,
        image: "👩🏼",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="depoimentos" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-white-pure/60 text-sm uppercase tracking-widest mb-2 block">
                        Depoimentos Reais
                    </span>
                    <h2 className="mb-4 text-white-pure">
                        Histórias de <span className="text-gradient-gold">Sucesso</span>
                    </h2>
                    <p className="text-xl text-white-pure/80 max-w-3xl mx-auto">
                        Veja como nossas alunas transformaram suas vidas através da beleza profissional
                    </p>
                    <p className="text-white-pure/50 mt-4 text-sm">
                        ⭐ Avaliação média de 4.9/5.0 • Mais de 500 depoimentos verificados
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6">
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-white-pure/90 text-sm leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white-pure/10">
                                    <div className="w-12 h-12 rounded-full bg-white-pure/10 flex items-center justify-center text-2xl">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white-pure">{testimonial.name}</p>
                                        <p className="text-xs text-white-pure/60">{testimonial.course}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
