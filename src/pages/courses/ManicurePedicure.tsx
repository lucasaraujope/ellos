import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-manicure.jpg";

const ManicurePedicure = () => {
    return (
        <CourseTemplate
            title="Manicure e Pedicure Profissional"
            description="Aprenda técnicas completas de manicure e pedicure, desde o básico até nail art avançada, e torne-se uma profissional de destaque no mercado da beleza."
            image={courseImage}
            duration="3 meses"
            overview="O curso de Manicure e Pedicure Profissional da Ellos prepara você para atuar com excelência nos cuidados com as unhas. Aprenda técnicas de higienização, esmaltação perfeita, cuidados com cutículas, tratamentos especializados e nail art criativa. Nossa metodologia prática garante que você saia preparada para atender clientes com profissionalismo e qualidade."
            topics={[
                "Anatomia e fisiologia das unhas",
                "Técnicas de higienização e biossegurança",
                "Manicure e pedicure tradicional e francesa",
                "Remoção de cutículas com perfeição",
                "Técnicas de esmaltação profissional",
                "Nail art: desde o básico até designs elaborados",
                "Decorações com adesivos, strass e acessórios",
                "Tratamento de unhas frágeis e quebradiças",
                "Hidratação e massagem relaxante",
                "Atendimento ao cliente e fidelização",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit profissional de manicure incluso",
                "Prática com modelos reais",
                "Material didático completo",
                "Aulas sobre montagem de home studio",
                "Técnicas de precificação e vendas",
                "Grupo exclusivo de networking",
            ]}
            audience={[
                "Iniciantes sem experiência prévia",
                "Manicures que querem se profissionalizar",
                "Profissionais buscando renda extra",
            ]}
        />
    );
};

export default ManicurePedicure;
