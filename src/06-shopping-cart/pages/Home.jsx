import { Products } from "../components/Products";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import { Navbar } from "../components/Navbar.jsx";
import "./Home.css";
import { useRef } from "react";

export function Home() {
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
        <Navbar />
        <main>
          <div className="box">
            {filteredProducts.length > 0 ? (
              <Products products={filteredProducts} />
            ) : (
              <div className="noproducts">
                <h3>No hay productos de {filters.category} para mostrar</h3>
              </div>
            )}
          </div>
        </main>
        <div ref={externalRef}></div>
        <footer>
          Copyright Luciano Sanuni
        </footer>
    </>
  );
}
