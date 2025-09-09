import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Resume from "@/pages/resume";
import ProjectDetail from "@/pages/project-detail"; // Import ProjectDetail
import NotFound from "@/pages/not-found"; // Import NotFound if it's not already imported
import queryClient from "@/lib/queryClient"; // Assuming queryClient is imported correctly

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      {/* Add the new route for project details */}
      <Route path="/project/:id">
        {(params) => <ProjectDetail projectId={params.id} />}
      </Route>
      <Route component={NotFound} /> {/* Route for not found pages */}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="light-spots">
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;