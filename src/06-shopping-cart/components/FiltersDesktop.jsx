import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import "./FiltersDesktop.css";
import { useMediaQuery } from "react-responsive";

export function FiltersDesktop({ isDarkMode }) {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (text) => {
    setFilters((prevState) => ({
      ...prevState,
      category: text,
    }));
  };

  const objcategories = {
    all: "Todos",
    "white spirits": "Bebidas blancas",
    smartphones: "Celulares",
    laptops: "Laptops",
    groceries: "Comestibles",
    "home-decoration": "Decoracion para casa",
    skincare: "Cuidado de piel",
    fragrances: "Fragancias",
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <section>
          <div
            className={isDarkMode === "light" ? "filters" : "filtersdarkmode"}
          >
            <p id="namefilter">Filtros</p>
            <p id="namecategory">Categoria</p>
            <ul>
              {Object.entries(objcategories).map(([key, literal]) => (
                <li
                  key={key}
                  className={
                    key === filters.category ? "activecategoryfilter" : ""
                  }
                  onClick={() => handleChangeCategory(key)}
                >
                  {literal}
                </li>
              ))}
            </ul>
            <div className="pricefilter">
              <label htmlFor={minPriceFilterId}>Rangos de precio:</label>
              <span id="minprice">${filters.minPrice}</span>
              <input
                type="range"
                id={minPriceFilterId}
                min="0"
                max="2000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
              />
              <span>$400 - 2000</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
