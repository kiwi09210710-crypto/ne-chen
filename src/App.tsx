import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import CaseSocialMedia from "./pages/CaseSocialMedia";
import CaseAdOptimization from "./pages/CaseAdOptimization";
import CaseKolKoc from "./pages/CaseKolKoc";
import CaseProductSeo from "./pages/CaseProductSeo";
import CaseProposal from "./pages/CaseProposal";
import CaseEcommerce from "./pages/CaseEcommerce";
import CaseCrm from "./pages/CaseCrm";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/case/social-media" element={<CaseSocialMedia />} />
          <Route path="/case/ad-optimization" element={<CaseAdOptimization />} />
          <Route path="/case/kol-koc" element={<CaseKolKoc />} />
          <Route path="/case/product-seo" element={<CaseProductSeo />} />
          <Route path="/case/proposal" element={<CaseProposal />} />
          <Route path="/case/ecommerce" element={<CaseEcommerce />} />
          <Route path="/case/crm" element={<CaseCrm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
