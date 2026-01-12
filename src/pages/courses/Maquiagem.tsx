import CourseTemplate from "@/components/CourseTemplate";
import courseImage from "@/assets/curso-maquiagem.jpg";

const Maquiagem = () => {
    return (
        <CourseTemplate
            title="Maquiagem Profissional"
            description="Aprenda maquiagem social, artística e para noivas. Domine técnicas de contorno, iluminação e coloração para realçar a beleza natural de cada cliente."
            image={courseImage}
            duration="4 meses"
            overview="O curso de Maquiagem Profissional da Ellos oferece formação completa para você se tornar uma maquiadora versátil e preparada para qualquer ocasião. Aprenda desde maquiagem natural até looks elaborados para eventos, noivas, editoriais e muito mais. Domine técnicas de visagismo, colorimetria, contorno e iluminação, trabalhando com produtos profissionais de alta qualidade."
            topics={[
                "Teoria das cores aplicada à maquiagem",
                "Preparação e cuidados com a pele",
                "Técnicas de base e correção de imperfeições",
                "Contorno e iluminação profissional",
                "Design de sobrancelhas aplicado à maquiagem",
                "Técnicas de olhos: do natural ao esfumado",
                "Maquiagem social para diferentes ocasiões",
                "Maquiagem para noivas: tendências e clássicos",
                "Maquiagem artística e editorial",
                "Fotografia e iluminação para maquiagem",
                "Visagismo e harmonização facial",
            ]}
            benefits={[
                "Certificado de conclusão reconhecido",
                "Kit profissional de maquiagem",
                "Prática intensiva com modelos",
                "Portfólio fotográfico profissional",
                "Acesso a fornecedores de produtos pro",
                "Workshop com fotógrafos parceiros",
                "Consultoria de precificação e branding",
            ]}
            audience={[
                "Iniciantes apaixonadas por maquiagem",
                "Profissionais de beleza buscando complementar serviços",
                "Maquiadoras amadoras que querem se profissionalizar",
            ]}
        />
    );
};

export default Maquiagem;
