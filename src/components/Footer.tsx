import { Sparkles, Instagram, MessageCircle, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-background border-t border-white-pure/10 pt-16 pb-8 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-gradient-gold">Ellos</span>
                        </div>
                        <p className="text-white-pure/80 mb-4 leading-relaxed">
                            Academia de Beleza com certificação internacional. Transformando paixão em profissão desde 2018.
                        </p>
                        <p className="text-white-pure/60 text-sm mb-6 italic">
                            "Formando profissionais de excelência para o mercado da beleza"
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white-pure">Links Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#inicio" className="text-white-pure/70 hover:text-primary transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#cursos" className="text-white-pure/70 hover:text-primary transition-colors">
                                    Cursos
                                </a>
                            </li>
                            <li>
                                <a href="#jornada" className="text-white-pure/70 hover:text-primary transition-colors">
                                    Metodologia
                                </a>
                            </li>
                            <li>
                                <a href="#depoimentos" className="text-white-pure/70 hover:text-primary transition-colors">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a href="#planos" className="text-white-pure/70 hover:text-primary transition-colors">
                                    Planos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white-pure">Nossos Cursos</h3>
                        <ul className="space-y-3">
                            <li>
                                <span className="text-white-pure/70">Manicure Profissional</span>
                            </li>
                            <li>
                                <span className="text-white-pure/70">Cabeleireira Completa</span>
                            </li>
                            <li>
                                <span className="text-white-pure/70">Designer de Sobrancelhas</span>
                            </li>
                            <li>
                                <span className="text-white-pure/70">Maquiagem Profissional</span>
                            </li>
                            <li>
                                <span className="text-white-pure/70">Depilação Especializada</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white-pure">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white-pure/70 text-sm">
                                    Rua da Beleza, 123 - Centro<br />
                                    São Paulo, SP - CEP 01000-000
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+5511999999999" className="text-white-pure/70 hover:text-primary transition-colors text-sm">
                                    (11) 99999-9999
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="mailto:contato@ellos.com.br" className="text-white-pure/70 hover:text-primary transition-colors text-sm">
                                    contato@ellos.com.br
                                </a>
                            </li>
                        </ul>
                        <p className="text-white-pure/50 text-xs mt-4">
                            Atendimento: Seg-Sex 8h às 18h | Sáb 8h às 12h
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white-pure/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white-pure/60 text-sm">
                            © {currentYear} Ellos Academia de Beleza. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-white-pure/60 hover:text-primary transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-white-pure/60 hover:text-primary transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
