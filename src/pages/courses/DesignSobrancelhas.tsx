import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-sobrancelhas.jpg";

const DesignSobrancelhas = () => {
    return (
        <CourseTemplate
            title="Design de Sobrancelhas"
            description="Especialize-se em design, micropigmentação, henna e todas as técnicas de embelezamento de sobrancelhas. Transforme olhares com precisão e arte."
            image={courseImage}
            duration="2 meses"
            overview="O curso de Design de Sobrancelhas da Ellos forma profissionais completas e especializadas em uma das áreas mais requisitadas do mercado de beleza. Aprenda design personalizado, técnicas de medição facial, aplicação de henna, micropigmentação fio a fio, laminação e todos os procedimentos para criar sobrancelhas perfeitas e naturais para cada cliente."
            topics={[
                "Visagismo facial aplicado às sobrancelhas",
                "Medição e marcação com paquímetro",
                "Técnicas de depilação com pinça e cera",
                "Design personalizado para cada rosto",
                "Aplicação de henna: técnicas e tons",
                "Micropigmentação fio a fio",
                "Sombreamento e efeito esfumado",
                "Laminação de sobrancelhas",
                "Coloração e tonalização",
                "Correção de falhas e sobrancelhas danificadas",
                "Biossegurança e cuidados pós-procedimento",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit completo de design de sobrancelhas",
                "Prática com diferentes formatos de rosto",
                "Técnicas avançadas de micropigmentação",
                "Material didático e apostila técnica",
                "Desconto em produtos profissionais",
                "Mentoria de posicionamento no mercado",
            ]}
            audience={[
                "Iniciantes que desejam se especializar",
                "Profissionais de beleza buscando alta demanda",
                "Empreendedoras que querem serviço valorizado",
            ]}
        />
    );
};

export default DesignSobrancelhas;
