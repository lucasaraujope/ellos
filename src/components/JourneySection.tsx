import { FileCheck, BookOpen, Award, TrendingUp } from "lucide-react";

const journeySteps = [
    {
        icon: FileCheck,
        title: "Inscrição Simples",
        description: "Processo rápido e descomplicado para você começar sua jornada",
    },
    {
        icon: BookOpen,
        title: "Aulas Práticas",
        description: "Aprenda fazendo, com equipamentos profissionais e professoras experientes",
    },
    {
        icon: Award,
        title: "Certificação Internacional",
        description: "Receba seu certificado reconhecido mundialmente ao concluir o curso",
    },
    {
        icon: TrendingUp,
        title: "Sucesso no Mercado",
        description: "Destaque-se como profissional qualificada e conquiste seus objetivos",
    },
];

const JourneySection = () => {
    return (
        <section id="jornada" className="py-24 relative overflow-hidden bg-white-soft">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full gradient-gold-radial opacity-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full gradient-gold-radial opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-gold-medium text-sm uppercase tracking-widest mb-2 block">
                        Metodologia Exclusiva
                    </span>
                    <h2 className="mb-4 text-gold-darker">
                        Sua <span className="text-gradient-gold">Jornada</span> na Ellos
                    </h2>
                    <p className="text-xl text-gold-darker/70 max-w-3xl mx-auto">
                        Do primeiro dia até o sucesso profissional, estaremos ao seu lado em cada etapa
                    </p>
                    <p className="text-gold-darker/50 mt-4 text-sm italic">
                        "Mais de 95% das nossas alunas estão atuando no mercado em até 3 meses após a formação"
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {journeySteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative group animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Connection Line (hidden on mobile and last item) */}
                                {index < journeySteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                                )}

                                <div className="text-center">
                                    {/* Icon Circle */}
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white-pure border-2 border-gold-medium/30 flex items-center justify-center group-hover:border-gold-medium transition-all duration-300 shadow-elegant group-hover:scale-110">
                                        <Icon className="w-10 h-10 text-gold-medium" />
                                    </div>

                                    {/* Step Number */}
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-medium/20 text-gold-darker text-sm font-bold mb-3">
                                        {index + 1}
                                    </div>

                                    <h3 className="text-lg font-bold mb-2 text-gold-darker">{step.title}</h3>
                                    <p className="text-gold-darker/70 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
