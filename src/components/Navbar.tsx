import { useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { label: "Início", href: "#inicio" },
        { label: "Metodologia", href: "#jornada" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contato" },
    ];

    const courseLinks = [
        { label: "Cabeleireiro Profissional", href: "/curso/cabeleireiro" },
        { label: "Manicure e Pedicure", href: "/curso/manicure-pedicure" },
        { label: "Alongamento de Unhas", href: "/curso/alongamento-unhas" },
        { label: "Extensão de Cílios", href: "/curso/extensao-cilios" },
        { label: "Depilação Profissional", href: "/curso/depilacao" },
        { label: "Maquiagem Profissional", href: "/curso/maquiagem" },
        { label: "Design de Sobrancelhas", href: "/curso/design-sobrancelhas" },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);

        // If not on home page, navigate to home first
        if (location.pathname !== "/") {
            navigate("/" + href);
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <Sparkles className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-bold text-gradient-gold">Ellos</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </button>
                        ))}

                        {/* Cursos Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
                                Cursos
                                <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-card border-border">
                                {courseLinks.map((course) => (
                                    <DropdownMenuItem key={course.href} asChild>
                                        <Link
                                            to={course.href}
                                            className="cursor-pointer text-foreground/80 hover:text-primary"
                                        >
                                            {course.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            onClick={() => scrollToSection("#contato")}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
                        >
                            Fale Conosco
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-foreground"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-6 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left text-foreground/80 hover:text-primary transition-colors py-2"
                                >
                                    {item.label}
                                </button>
                            ))}

                            {/* Mobile Cursos Section */}
                            <div className="border-t border-border pt-4">
                                <p className="text-sm font-semibold text-primary mb-3">Cursos</p>
                                {courseLinks.map((course) => (
                                    <Link
                                        key={course.href}
                                        to={course.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-left text-foreground/80 hover:text-primary transition-colors py-2"
                                    >
                                        {course.label}
                                    </Link>
                                ))}
                            </div>

                            <Button
                                onClick={() => scrollToSection("#contato")}
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                Fale Conosco
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
