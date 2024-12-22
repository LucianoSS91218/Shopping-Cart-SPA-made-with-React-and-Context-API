import { useContext } from "react";
import { FiltersContext } from "../context/filters.jsx";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
  const filteredProducts = products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === "all" || product.category === filters.category)
    );
  });

  const sortStrategies = {
    minprice: (a, b) => a.price - b.price,
    maxprice: (a, b) => b.price - a.price,
    nameasc: (a, b) => a.title.localeCompare(b.title),
    namedesc: (a, b) => b.title.localeCompare(a.title),
  };

  const sortFunction = sortStrategies[filters.sorttype] || (() => 0); // Default: no sorting
  return filteredProducts.sort(sortFunction);
};


  return { filters, filterProducts, setFilters };
}
