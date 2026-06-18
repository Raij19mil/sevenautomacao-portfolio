import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import AIAgent from "./pages/services/AIAgent";
import DatabaseIntegration from "./pages/services/Database";
import ScheduledMessages from "./pages/services/ScheduledMessages";
import ChatPlatform from "./pages/services/ChatPlatform";
import AutoDispatch from "./pages/services/AutoDispatch";
import SmartScheduling from "./pages/services/SmartScheduling";
import Analytics from "./pages/services/Analytics";
import SevenRH from "./pages/services/SevenRH";
import FollowUp from "./pages/services/FollowUp";
import WebsiteCreation from "./pages/services/WebsiteCreation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos/agente-ia" element={<AIAgent />} />
          <Route path="/servicos/banco-dados" element={<DatabaseIntegration />} />
          <Route path="/servicos/mensagens-programadas" element={<ScheduledMessages />} />
          <Route path="/servicos/plataforma-chat" element={<ChatPlatform />} />
          <Route path="/servicos/disparo-automatico" element={<AutoDispatch />} />
          <Route path="/servicos/agendamento-inteligente" element={<SmartScheduling />} />
          <Route path="/servicos/analytics" element={<Analytics />} />
          <Route path="/servicos/seven-rh" element={<SevenRH />} />
          <Route path="/servicos/followup" element={<FollowUp />} />
          <Route path="/servicos/criacao-sites" element={<WebsiteCreation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
