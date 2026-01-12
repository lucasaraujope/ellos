import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-cabeleireiro.jpg";

const Cabeleireiro = () => {
    return (
        <CourseTemplate
            title="Cabeleireiro Profissional"
            description="Domine todas as técnicas de corte, coloração, tratamentos capilares e penteados para se tornar uma cabeleireira completa e requisitada no mercado."
            image={courseImage}
            duration="6 meses"
            certification="Internacional"
            overview="O curso de Cabeleireiro Profissional da Ellos oferece uma formação completa e abrangente para você dominar todas as técnicas essenciais da área capilar. Com aulas 100% práticas, você aprenderá desde os fundamentos básicos até técnicas avançadas de transformação capilar, trabalhando com modelos reais e utilizando produtos e equipamentos profissionais de alta qualidade."
            topics={[
                "Cortes femininos e masculinos modernos",
                "Técnicas de escovação e finalização profissional",
                "Colorimetria completa: mechas, luzes, ombré hair",
                "Descoloração e tonalização segura",
                "Tratamentos capilares e cronograma capilar",
                "Penteados para festas, noivas e eventos",
                "Química capilar: alisamentos e permanentes",
                "Visagismo e consultoria de imagem",
                "Gestão de salão e precificação de serviços",
            ]}
            benefits={[
                "Certificação internacional reconhecida",
                "Aulas práticas com modelos reais",
                "Kit completo de produtos profissionais",
                "Acesso vitalício à plataforma de atualizações",
                "Networking com profissionais da área",
                "Suporte para abertura de seu próprio salão",
                "Material didático exclusivo incluso",
            ]}
            audience={[
                "Iniciantes que desejam ingressar na carreira",
                "Profissionais que querem atualizar técnicas",
                "Empreendedoras que querem abrir um salão",
            ]}
        />
    );
};

export default Cabeleireiro;
