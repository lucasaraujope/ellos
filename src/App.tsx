import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cabeleireiro from "./pages/courses/Cabeleireiro";
import ManicurePedicure from "./pages/courses/ManicurePedicure";
import AlongamentoUnhas from "./pages/courses/AlongamentoUnhas";
import ExtensaoCilios from "./pages/courses/ExtensaoCilios";
import Depilacao from "./pages/courses/Depilacao";
import Maquiagem from "./pages/courses/Maquiagem";
import DesignSobrancelhas from "./pages/courses/DesignSobrancelhas";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/curso/cabeleireiro" element={<Cabeleireiro />} />
                    <Route path="/curso/manicure-pedicure" element={<ManicurePedicure />} />
                    <Route path="/curso/alongamento-unhas" element={<AlongamentoUnhas />} />
                    <Route path="/curso/extensao-cilios" element={<ExtensaoCilios />} />
                    <Route path="/curso/depilacao" element={<Depilacao />} />
                    <Route path="/curso/maquiagem" element={<Maquiagem />} />
                    <Route path="/curso/design-sobrancelhas" element={<DesignSobrancelhas />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
