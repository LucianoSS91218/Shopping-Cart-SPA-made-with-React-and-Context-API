import { Products } from "../components/Products";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import { Navbar } from "../components/Navbar.jsx";
import "./Home.css";
import { useRef } from "react";
import useDarkLight from "../dark-light/hooks/useDarkLight.js";
import "../dark-light/DarkLight.css";
import useNearScreen from "../hooks/useNearScreen.js";

export function Home() {
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  const [theme, setTheme] = useDarkLight("theme", "light");

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "3100px",
    externalRef,
  });

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <Navbar />
        <button
          id="changedm"
          onClick={handleToggleTheme}
          className={isNearScreen ? "fixd" : ""}
        >
          Change Theme
        </button>
        <main>
          <div className="box">
            {filteredProducts.length > 0 ? (
              <Products products={filteredProducts} isDarkMode={theme} />
            ) : (
              <div className="noproducts">
                <h3>No hay productos de {filters.category} para mostrar</h3>
              </div>
            )}
          </div>
        </main>
        <div ref={externalRef}></div>
        <footer className={theme === "light" ? "footerwhite" : ""}>
          Copyright Luciano Sanuni
        </footer>
      </div>
    </>
  );
}
