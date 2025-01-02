import "./Products.css";
import "./FiltersTwo.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useFilters } from "../hooks/useFilters.js";
import { FaArrowDown } from "react-icons/fa";
import { BiSortDown } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import ReactDOM from "react-dom";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const { filters, setFilters } = useFilters();

  let [showButtonsSort, setShowButtonsSort] = useState(false);

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

  const sortoptionsref = useRef();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalFilters = useRef();

  const [indice, setIndice] = useState(0);

  const [showOptionsFilters, setShowOptionsFilters] = useState(false);
  const [ReShowOptionsFilters, setReShowOptionsFilters] = useState(true);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    }

    const handleClickOutside = (event) => {
      if (
        sortoptionsref.current &&
        !sortoptionsref.current.contains(event.target)
      ) {
        setShowButtonsSort(false);
      }

      if (
        modalFilters.current &&
        !modalFilters.current.contains(event.target)
      ) {
        setIsOpenModal(false);
        document.body.style.overflow = "auto";
        setShowOptionsFilters(false);
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

  const showModalFilters = () => {
    setIsOpenModal(true);
  };

  const closeModalFilters = () => {
    setIsOpenModal(false);
  };

  const CATEGORIES_TO_MAP = {
    all: "Todos",
    "white spirits": "Bebidas blancas",
    smartphones: "Celulares",
    laptops: "Laptops",
    groceries: "Comestibles",
    "home-decoration": "Decoracion para casa",
    skincare: "Cuidado de piel",
    fragrances: "Fragancias",
  };

  const handleModalCleanFilters = () => {
    setFilters((prevState) => ({
      ...prevState,
      category: "all",
      minPrice: 440,
    }));
  };

  const handleChangeCategory = (text) => {
    setFilters((prevState) => ({
      ...prevState,
      category: text,
    }));
  };

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const filtersOptionsMobile = [
    {
      id: "ajg947nj5",
      titulo: "Categoria",
      nose: "hola",
      items: (
        <ul>
          {Object.entries(CATEGORIES_TO_MAP).map(([key, literal]) => (
            <>
              <li
                key={key}
                className={""}
                onClick={() => handleChangeCategory(key)}
              >
                {literal}
              </li>
              <hr />
            </>
          ))}
        </ul>
      ),
    },
    {
      id: "mkg285kl9",
      titulo: "Precio",
      nose: "chau",
      items: (
        <>
          <p>Rangos de precio</p>
          <hr />
          <span id="minprice">${filters.minPrice}</span>
          <input
            type="range"
            id="139mkj48"
            min="0"
            max="2000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>$400 - 2000</span>
        </>
      ),
    },
  ];

  const { titulo, items } = filtersOptionsMobile[indice];
  
  return (
    <>
      <div className="containerproducts">
        <div className="alignsortproducts">
          <p
          >
            15 Productos
          </p>

          <div className="onlymobile">
            <div id="fathersort">
              <span
                id="iconsortonlymobile"
                ref={sortoptionsref}
                onClick={() => handleSortButtonClick()}
              >
                <BiSortDown size={32} />
              </span>
              <span
                ref={sortoptionsref}
                onClick={() => handleSortButtonClick()}
              >
                {`Ordenar por: `}
              </span>
              <span>
                {`${filters.sorttype}`}
                <FaArrowDown size={18} />
              </span>
            </div>
            <div className="filtercategoryonlymobile">
              <span
                onClick={showModalFilters}
              >
                Filtrar
              </span>
            </div>
          </div>
        </div>
        {showButtonsSort && (
          <div className="containerfiltersort">
            <div className="filterssort" ref={sortoptionsref}>
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
        {ReactDOM.createPortal(
          <dialog
            ref={modalFilters}
            className={`modalfiltersmobile ${isOpenModal && "is-open"}`}
          >
            <div className="head">
              <FaAngleLeft
                onClick={() => setReShowOptionsFilters(!ReShowOptionsFilters)}
                className={showOptionsFilters ? "active" : "inactive"}
                size={26}
              />
              <p
                onClick={() => setReShowOptionsFilters(!ReShowOptionsFilters)}
                className={
                  showOptionsFilters || !ReShowOptionsFilters
                    ? "active"
                    : "inactive"
                }
              >
                Atras
              </p>
              <p className="modal-close" onClick={closeModalFilters}>
                X
              </p>
            </div>
            <div className="modal-container">
              <div className="titlehead">
                <strong>Filtros</strong>
                <FaAngleRight
                  className={`${titulo === "Categoria" ? "align" : ""} ${
                    showOptionsFilters ? "active" : ""
                  }`}
                  size={30}
                />
                <strong className={showOptionsFilters ? "active" : ""}>
                  {showOptionsFilters ? titulo : ""}
                </strong>
              </div>
              <hr />

              <div className="content">
                {filtersOptionsMobile.map((f, index) => {
                  return (
                    <>
                      <div
                        className={`${
                          !showOptionsFilters || !ReShowOptionsFilters
                            ? "option"
                            : "option inactive"
                        }`}
                        onClick={() => {
                          setShowOptionsFilters(true);
                          setIndice(index);
                        }}
                      >
                        <p>{f.titulo}</p>
                        <FaAngleRight size={24} />
                      </div>
                      <hr
                        className={`${
                          showOptionsFilters ? "hidehr" : "showhr"
                        }`}
                      />
                    </>
                  );
                })}

                <div
                  className={`${
                    showOptionsFilters && ReShowOptionsFilters
                      ? "showitems active"
                      : "showitems"
                  }`}
                >
                  {items}
                </div>
              </div>
              <div id="padrecleanfilters">
                <button id="cleanfilters" onClick={handleModalCleanFilters}>
                  Limpiar
                </button>
              </div>
            </div>
          </dialog>,
          document.getElementById("modalfiltersmobile")
        )}

        <section>
          <div className="products">
            {products.slice(0, 8).map((product) => {
              const isProductInCart = checkProductInCart(product);
              return (
                <div key={product.id} className="theproduct">
                  <div className="content">
                    <img src={product.thumbnail} alt={product.title} />
                    <strong id="title">{product.title}</strong>
                    <span id="price">{`$${product.price}`}</span>
                  </div>

                  <div className="gotoproduct">
                    <NavLink to={`/products/${product.id}`}>
                      Ver producto
                    </NavLink>
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
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
