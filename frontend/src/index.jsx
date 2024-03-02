import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProviderComponent } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
const root = document.getElementById("root");

const rootInstance = createRoot(root);
rootInstance.render(
  <React.StrictMode>
  <ErrorBoundary fallback= "Oooops!! There was an error" > 
    <AuthContextProviderComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProviderComponent>
    </ErrorBoundary> 
  </React.StrictMode>
);
