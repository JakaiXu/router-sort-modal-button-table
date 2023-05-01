import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { NavigationProvider } from "./context/navigation";
createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
