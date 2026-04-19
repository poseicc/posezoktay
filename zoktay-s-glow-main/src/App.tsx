import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
// Aurora-nı bura import etmirik, çünki CSS ilə daha sürətli həll edəcəyik

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* BURA DİQQƏT: 
        Arxa planı birbaşa burada bir div daxilində veririk. 
        Bu həm lag-ı sıfıra endirir, həm də bütün səhifələrdə eyni "təmiz" görünüşü saxlayır.
      */}
      <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
        {/* Sabit Gradientlər (Lag etməyən statik vizuallar) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Marşrutlar (Routes) */}
        <div className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;