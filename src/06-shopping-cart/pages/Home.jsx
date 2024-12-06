import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { Filters } from "../components/Filters.jsx";
import { useFilters } from "../hooks/useFilters.js";
import { productos as initialProducts } from "../mocks/products.json";
import CartPage from "../pages/CartPage.jsx";
//import { IS_DEVELOPMENT } from "../config.js";

export function Home() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <div>
      <CartPage />
      <Header />
      <Filters />
      <Products products={filteredProducts} />
    </div>
  );
}
