import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Auth0ProviderWithnavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithnavigate>
        <AppRoutes />
        <Toaster visibleToasts={1} position="top-right" richColors />
      </Auth0ProviderWithnavigate>
    </QueryClientProvider>
   </Router>
  </React.StrictMode>
);
