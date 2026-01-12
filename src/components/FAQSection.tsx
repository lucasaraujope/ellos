import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Preciso ter experiência prévia para me inscrever?",
        answer: "Não! Nossos cursos são desenvolvidos para atender desde iniciantes até profissionais que desejam aprimorar suas técnicas. Nossas professoras especialistas conduzem cada aluna do básico ao avançado.",
    },
    {
        question: "O certificado é realmente internacional?",
        answer: "Sim! Todos os nossos certificados são reconhecidos internacionalmente e seguem os padrões das principais entidades de beleza do mundo. Você poderá atuar profissionalmente em diversos países.",
    },
    {
        question: "Como funciona o parcelamento?",
        answer: "Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX com desconto especial e outras formas de pagamento. Entre em contato para conhecer todas as opções.",
    },
    {
        question: "Quando começam as próximas turmas?",
        answer: "Temos turmas iniciando mensalmente, tanto no período matutino quanto vespertino. Entre em contato conosco para conhecer as datas disponíveis e garantir sua vaga.",
    },
    {
        question: "Vocês fornecem material para as aulas práticas?",
        answer: "Sim! Todo o material necessário para as aulas práticas está incluído no valor do curso. Você terá acesso a produtos e equipamentos profissionais durante toda a sua formação.",
    },
    {
        question: "Existe suporte após a conclusão do curso?",
        answer: "Com certeza! Além do acompanhamento durante o curso, oferecemos suporte pós-formação, networking com outras alunas, acesso à nossa comunidade online e consultoria para abertura de negócio (nos planos Profissional e Completo).",
    },
    {
        question: "Posso visitar a escola antes de me matricular?",
        answer: "Sim! Agende uma visita através do WhatsApp ou formulário de contato. Teremos prazer em apresentar nossa estrutura, conhecer nossas professoras e tirar todas as suas dúvidas pessoalmente.",
    },
    {
        question: "Como funciona a metodologia de ensino?",
        answer: "Nossa metodologia é focada 100% na prática. Após uma breve introdução teórica, você aprende fazendo. Trabalhamos com modelos reais e situações do dia a dia profissional, garantindo que você saia preparada para o mercado.",
    },
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-white-cream relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white-cream to-white-soft" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-gold-medium text-sm uppercase tracking-widest mb-2 block">
                        Tire Suas Dúvidas
                    </span>
                    <h2 className="mb-4 text-gold-darker">
                        Perguntas <span className="text-gradient-gold">Frequentes</span>
                    </h2>
                    <p className="text-xl text-gold-darker/70 max-w-3xl mx-auto">
                        Tire suas dúvidas sobre nossos cursos, metodologia e certificações
                    </p>
                    <p className="text-gold-darker/50 mt-4 text-sm">
                        Não encontrou sua pergunta? Entre em contato conosco pelo WhatsApp
                    </p>
                </div>

                <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white-pure border border-gold-medium/20 rounded-lg px-6 data-[state=open]:border-gold-medium/50 transition-colors shadow-sm"
                            >
                                <AccordionTrigger className="text-left hover:text-gold-medium hover:no-underline py-5">
                                    <span className="font-semibold text-gold-darker">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-gold-darker/70 leading-relaxed pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
