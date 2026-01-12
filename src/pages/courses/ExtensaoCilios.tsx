import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-cilios.jpg";

const ExtensaoCilios = () => {
    return (
        <CourseTemplate
            title="Extensão de Cílios"
            description="Torne-se especialista em extensão de cílios fio a fio, volume russo e técnicas híbridas. Domine uma das áreas mais lucrativas da beleza."
            image={courseImage}
            duration="2 meses"
            overview="O curso de Extensão de Cílios da Ellos oferece formação completa nas técnicas mais modernas e requisitadas do mercado. Aprenda a aplicar cílios fio a fio, volume russo, técnicas híbridas e mega volume com perfeição, segurança e resultado natural. Você dominará desde a análise do olhar até técnicas avançadas de curvatura e customização."
            topics={[
                "Anatomia e fisiologia dos cílios naturais",
                "Técnica fio a fio clássica",
                "Volume russo: 2D, 3D, 4D e mais",
                "Técnica híbrida: combinando fio a fio e volume",
                "Mega volume para clientes especiais",
                "Mapeamento de olhos e design de olhar",
                "Escolha de curvaturas e espessuras",
                "Biossegurança e prevenção de alergias",
                "Manutenção e preenchimento",
                "Remoção segura e cuidados pós-aplicação",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit profissional de extensão de cílios",
                "Prática supervisionada com modelos reais",
                "Técnicas que garantem alta retenção",
                "Material didático digital exclusivo",
                "Desconto em fornecedores parceiros",
                "Grupo de networking e atualização",
            ]}
            audience={[
                "Iniciantes apaixonadas por beleza ocular",
                "Profissionais de beleza buscando especialização",
                "Empreendedoras que querem serviço de alto valor",
            ]}
        />
    );
};

export default ExtensaoCilios;
