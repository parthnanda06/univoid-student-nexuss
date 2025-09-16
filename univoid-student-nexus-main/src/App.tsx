import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import type { ComponentType, ReactNode } from "react";
const queryClient = new QueryClient();

const TooltipProviderSafe = TooltipProvider as unknown as ComponentType<{
  children?: ReactNode;
}>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProviderSafe>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProviderSafe>
  </QueryClientProvider>
);

export default App;
