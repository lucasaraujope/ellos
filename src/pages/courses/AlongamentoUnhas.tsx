import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-alongamento.jpg";

const AlongamentoUnhas = () => {
    return (
        <CourseTemplate
            title="Alongamento de Unhas"
            description="Especialize-se em alongamento de unhas com gel, acrílico e fibra de vidro. Aprenda técnicas modernas e lucrativas para oferecer serviços premium."
            image={courseImage}
            duration="2 meses"
            overview="O curso de Alongamento de Unhas da Ellos é focado em técnicas avançadas e modernas de extensão de unhas. Você dominará o uso de gel, acrílico, fibra de vidro e outros métodos de alongamento, criando unhas perfeitas, duráveis e esteticamente impecáveis. Aprenda também nail art em unhas alongadas e técnicas de manutenção."
            topics={[
                "Preparação da unha natural para alongamento",
                "Alongamento em gel: técnicas e aplicação",
                "Alongamento em acrílico: pó e líquido",
                "Fibra de vidro e técnicas híbridas",
                "Moldes e tips: quando e como usar",
                "Modelagem perfeita e acabamento profissional",
                "Decoração e nail art em unhas alongadas",
                "Manutenção e preenchimento",
                "Remoção segura sem danificar a unha natural",
                "Troubleshooting: como evitar erros comuns",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit completo de alongamento de unhas",
                "Prática intensiva com modelos",
                "Acesso a fornecedores profissionais",
                "Técnicas de precificação premium",
                "Atualizações sobre novas tendências",
                "Mentoria para abrir seu studio",
            ]}
            audience={[
                "Manicures que querem se especializar",
                "Profissionais de beleza buscando serviços premium",
                "Empreendedoras que desejam alta lucratividade",
            ]}
        />
    );
};

export default AlongamentoUnhas;
