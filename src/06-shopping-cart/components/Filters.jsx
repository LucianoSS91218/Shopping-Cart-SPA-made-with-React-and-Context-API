import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import "./Filters.css";

export function Filters({ isDarkMode }) {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  //const categoryFilterId = useId();

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
  
  return (
    <>
      <section
        className={isDarkMode === "light" ? "filters" : "filtersdarkmode"}
      >
        <p id="namefilter">Filtros</p>
        <p id="namecategory">Categoria</p>
        <ul>
          {Object.entries(objcategories).map(([key, literal]) => (
            <li
              key={key}
              className={key === filters.category ? "activecategoryfilter" : ""}
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
      </section>
    </>
  );
}

  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="pricefilter">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className="categoryfilter">
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
          <option value="white spirits">Bebidas blancas</option>
          <option value="groceries">comestibles</option>
          <option value="home-decoration">decoracion casa</option>
          <option value="skincare">cuidado de piel</option>
          <option value="fragrances">fragancias</option>
        </select>
      </div>
    </section>
  );
}
