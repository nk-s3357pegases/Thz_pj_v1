import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import PracticeAreas from "@/pages/practice-areas";
import Publications from "@/pages/publications";
import Media from "@/pages/media";
import Citations from "@/pages/citations";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/atuacao" component={PracticeAreas} />
      <Route path="/publicacoes" component={Publications} />
      <Route path="/midia" component={Media} />
      <Route path="/citacoes" component={Citations} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
