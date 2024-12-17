import { Products } from "../components/Products";
import { Filters } from "../components/Filters.jsx";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import { Navbar } from "../components/Navbar.jsx";
import "./Home.css";
import { useRef } from "react";
import useDarkLight from "../dark-light/hooks/useDarkLight.js";
import "../dark-light/DarkLight.css";
//import { IS_DEVELOPMENT } from "../config.js";
export function Home() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  const [theme, setTheme] = useDarkLight("theme", "light");
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
  <Navbar />
      <div className="light-dark-mode" data-theme={theme}>
        <button id="changedm" onClick={handleToggleTheme}>
          Change Theme
        </button>
      <br />
      <header>
        <Filters />
      </header>
      <main>
        <Products products={filteredProducts} />
      </main>
        <br />
        <button id="changedm" onClick={handleToggleTheme}>
          Change Theme
        </button>
        <br />
        <br />
      <footer>Copyright Luciano Sanuni</footer>
          </div>
    </>
  );
}
