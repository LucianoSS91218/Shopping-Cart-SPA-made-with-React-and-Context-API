import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useFilters } from "../hooks/useFilters.js";
import { FaArrowDown } from "react-icons/fa";
import { BiSortDown } from "react-icons/bi";

export function Products({ products, isDarkMode }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const { filters, setFilters } = useFilters();

  const objsorted = {
    Relevancia: "Relevancia",
    "Precio: menor a mayor": "Precio: menor a mayor",
    "Precio: mayor a menor": "Precio: mayor a menor",
    "Nombre, ascendente": "Nombre, ascendente",
    "Nombre, descendente": "Nombre, descendente",
  };

  const handleChangeSort = (text) => {
    setFilters((prevState) => ({
      ...prevState,
      sorttype: text,
    }));
  };

  const [showButtonsSort, setShowButtonsSort] = useState(false);

  const sortOptionsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortOptionsRef.current &&
        !sortOptionsRef.current.contains(event.target)
      ) {
        setShowSortOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSortButtonClick = () => {
    setShowButtonsSort(!showButtonsSort);
  };

  return (
    <>
      <div className="containerproducts">
        <div className="alignsortproducts">
          <p
            className={
              isDarkMode === "light" ? "lengthproducts" : "lengthproductswhite"
            }
          >
            15 Productos
          </p>
          <div className="onlymobile">
            <div onClick={(e) => handleSortButtonClick(e)} id="fathersort">
              <BiSortDown size={32} className="iconsortonlymobile" />
              <span data-id="abs" id="abs">
                {`Ordenar por:`}
              </span>
              <span className={isDarkMode === "dark" ? "typeorderwhite" : ""}>
                {`${filters.sorttype}`}
                <FaArrowDown size={18} />
              </span>
            </div>
            <div className="filtercategoryonlymobile">
              <span
                className={
                  isDarkMode === "dark"
                    ? "titlefiltercategoryonlymobilewhite"
                    : ""
                }
              >
                Filtrar por
              </span>
            </div>
          </div>
        </div>
        {showButtonsSort && (
          <div className="containerfiltersort" ref={sortOptionsRef}>
            <div
              className="filterssort"
              onClick={(e) => handleClickActiveButtonSort(e)}
            >
              {Object.entries(objsorted).map(([key, literal]) => {
                return (
                  <button key={key} onClick={() => handleChangeSort(key)}>
                    {literal}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="products">
          {products.slice(0, 15).map((product) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <div key={product.id} className="theproduct">
                <div className="content">
                  <img src={product.thumbnail} alt={product.title} />
                  <strong id="title">
                    {product.title.length > 14
                      ? `${product.title.slice(0, 14)}...`
                      : `${product.title}`}
                  </strong>
                  <span id="price">{`$${product.price}`}</span>
                </div>

                <NavLink to={`/products/${product.id}`}>Ver producto</NavLink>
                <div className="isproductincart">
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
