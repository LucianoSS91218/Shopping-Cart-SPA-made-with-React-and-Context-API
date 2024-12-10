import { Products } from "../components/Products";
import { Filters } from "../components/Filters.jsx";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import { Navbar } from "../components/Navbar.jsx";
import "./Home.css";
//import { IS_DEVELOPMENT } from "../config.js";
export function Home() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Navbar />
      <br />
      <main>
        <Filters />
        <Products products={filteredProducts} />
      </main>
    </>
  );
}
