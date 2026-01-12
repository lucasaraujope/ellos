import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Check, Clock, Award, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface CourseTemplateProps {
    title: string;
    description: string;
    image: string;
    duration: string;
    certification?: string;
    overview: string;
    topics: string[];
    benefits: string[];
    audience: string[];
}

const CourseTemplate = ({
    title,
    description,
    image,
    duration,
    certification,
    overview,
    topics,
    benefits,
    audience,
}: CourseTemplateProps) => {
    const whatsappNumber = "5515981425000";
    const whatsappMessage = encodeURIComponent(`Oi, eu quero saber mais sobre o curso de ${title}`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const handleContact = () => {
        window.open(whatsappLink, "_blank");
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
                </div>

                <div className="container mx-auto px-4 relative z-10 py-16">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="mb-6 leading-tight text-white-pure">
                            {title}
                        </h1>
                        <p className="text-xl text-white-pure/90 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white-pure/70">Duração</p>
                                    <p className="font-semibold text-white-pure">{duration}</p>
                                </div>
                            </div>

                            {certification && (
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white-pure/70">Certificação</p>
                                        <p className="font-semibold text-white-pure">{certification}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Button
                            onClick={handleContact}
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
                        >
                            Falar com Equipe Comercial
                        </Button>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 bg-white-soft">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gold-darker">
                            Sobre o <span className="text-gradient-gold">Curso</span>
                        </h2>
                        <p className="text-lg text-gold-darker/80 leading-relaxed">
                            {overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-16 bg-white-cream">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Topics Card */}
                        <Card className="bg-white-pure border-gold-medium/20 shadow-elegant">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gradient-gold">
                                    O que você vai aprender
                                </h3>
                                <div className="space-y-4">
                                    {topics.map((topic, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-medium flex-shrink-0 mt-1" />
                                            <span className="text-gold-darker/90 leading-relaxed">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Benefits Card */}
                        <Card className="bg-white-pure border-gold-medium/20 shadow-elegant">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gradient-gold">
                                    Benefícios do Curso
                                </h3>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-medium flex-shrink-0 mt-1" />
                                            <span className="text-gold-darker/90 leading-relaxed">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-16 bg-white-soft">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-gold-medium/20 flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-gold-medium" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-gold-darker">
                            Para quem é <span className="text-gradient-gold">este curso</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            {audience.map((item, index) => (
                                <Card key={index} className="bg-white-pure border-gold-medium/20">
                                    <CardContent className="p-6">
                                        <p className="text-gold-darker/90">{item}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-background">
                <div className="absolute inset-0 gradient-gold-radial opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-white-pure">
                            Pronta para começar sua <span className="text-gradient-gold">jornada</span>?
                        </h2>
                        <p className="text-xl text-white-pure/80 mb-8">
                            Entre em contato com nossa equipe comercial e garanta sua vaga
                        </p>
                        <Button
                            onClick={handleContact}
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
                        >
                            Falar com Equipe Comercial
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CourseTemplate;
