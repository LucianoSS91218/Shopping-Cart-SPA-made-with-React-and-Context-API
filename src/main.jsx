import { createRoot } from "react-dom/client";
import App from "./06-shopping-cart/App";
import { FiltersProvider } from "./06-shopping-cart/context/filters";
import "./06-shopping-cart/index.css";
createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);

