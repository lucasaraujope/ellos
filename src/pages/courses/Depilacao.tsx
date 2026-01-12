import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-depilacao.jpg";

const Depilacao = () => {
    return (
        <CourseTemplate
            title="Depilação Profissional"
            description="Domine técnicas modernas e seguras de depilação com cera, roll-on e métodos alternativos. Torne-se uma especialista em bem-estar e estética corporal."
            image={courseImage}
            duration="2 meses"
            overview="O curso de Depilação Profissional da Ellos ensina técnicas eficientes, seguras e confortáveis de remoção de pelos. Aprenda a trabalhar com diferentes tipos de cera, roll-on, técnicas de depilação facial e corporal, além de protocolos de higiene e biossegurança. Você estará preparada para oferecer um serviço de excelência que garante conforto e resultados duradouros."
            topics={[
                "Anatomia da pele e estrutura do pelo",
                "Tipos de cera: quente, morna e fria",
                "Técnica com roll-on profissional",
                "Depilação facial: buço, sobrancelha e rosto completo",
                "Depilação corporal: pernas, braços, axilas e virilha",
                "Depilação íntima: brasileira e personalizada",
                "Biossegurança e esterilização de materiais",
                "Prevenção de foliculite e pelos encravados",
                "Tratamentos pós-depilatórios",
                "Atendimento humanizado e gestão da dor",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit profissional de depilação incluso",
                "Prática com diferentes tipos de pele",
                "Protocolos de segurança e higiene",
                "Técnicas para minimizar o desconforto",
                "Material didático completo",
                "Mentoria para montar seu espaço",
            ]}
            audience={[
                "Iniciantes que querem entrar no mercado",
                "Profissionais de estética buscando especialização",
                "Empreendedoras que querem serviço recorrente",
            ]}
        />
    );
};

export default Depilacao;
