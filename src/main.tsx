
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import ErrorBoundary from "./components/ErrorBoundary.tsx";
  import "./index.css";

  // Error boundary for Chrome extension conflicts
  const initializeApp = () => {
    try {
      const rootElement = document.getElementById("root");
      if (!rootElement) {
        throw new Error("Root element not found");
      }
      
      const root = createRoot(rootElement);
      root.render(
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      );
    } catch (error) {
      console.error("Application initialization error:", error);
      // Fallback for critical errors
      const rootElement = document.getElementById("root");
      if (rootElement) {
        rootElement.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: Inter, sans-serif;">
            <div style="text-align: center;">
              <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #2C3E50;">Loading The UX Suite...</h1>
              <p style="color: #34495E;">Please refresh if this persists</p>
            </div>
          </div>
        `;
      }
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
  