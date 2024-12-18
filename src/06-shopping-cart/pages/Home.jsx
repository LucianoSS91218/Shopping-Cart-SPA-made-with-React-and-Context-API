import { Products } from "../components/Products";
import { Filters } from "../components/Filters.jsx";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import { Navbar } from "../components/Navbar.jsx";
import "./Home.css";
import { useRef, useState, useEffect } from "react";
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

    const [alture, setAlture] = useState(false);

  const dmref = useRef();

  useEffect(() => {
    // use intersection observer to detect end of the page scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAlture(true);
        }
      },
      {
        rootMargin: "3500px",
      }
    );

    observer.observe(dmref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
  <Navbar />
      <div className="light-dark-mode" data-theme={theme}>
        <button
          id="changedm"
          onClick={handleToggleTheme}
          className={alture ? "fixd" : ""}
        >
          Change Theme
        </button>
      <br />
      <header>
        <Filters />
      </header>
      <main>
        <Products products={filteredProducts} />
      </main>
        <br ref={dmref} />
      <footer>Copyright Luciano Sanuni</footer>
          </div>
    </>
  );
}
