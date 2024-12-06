import { useParams } from "react-router";
import { useState } from "react";
import { productos } from "../mocks/products.json";
import { AddToCartIcon, RemoveFromCartIcon } from "../components/Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import CartPage from "../pages/CartPage.jsx";
import Home from "../assets/home-icon-transparent-free.png";
import StarRating from "../components/StarRating.jsx";
import "./ProductDetail.css";
import { productos as OtherProducts } from "../mocks/products.json";
import { useNavigate } from "react-router-dom";

import { Carousel } from "../components/SimilarProducts.jsx";

export function ProductDetail() {
  const [value, setValue] = useState(0);
  const navigte = useNavigate();
  const pid = useParams();
  const pidDetail = productos.filter((x) => x.id === parseInt(pid.id));

  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    const checked = cart.some((item) => item.id === product.id);
    return checked;
  };

  const slices = OtherProducts.slice(30, 57);

  /*
  el tema que como esto es un supermercado no podemos hacer la logica de poner cheto 
  las caracteristicas porque no es una pagina como Naldo o Fravega,
  como aca tenemos alimentos y bebidas por eso te digo
   */

  const ejemplo = [
    {
      id: 1,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      stars: 5,
      thumbnail: "http://localhost:5173/imagenes/iphone x.jpg",
      images: [
        "http://localhost:5173/imagenes/iphone x.jpg",
        "http://localhost:5173/imagenes/iphone x2.jpg",
        "http://localhost:5173/imagenes/iphone x3.jpg",
      ],
    },
  ];

  return (
    <>
      <nav className="nav">
        <div className="padrehome">
          <img
            src={Home}
            width="105px"
            height="95px"
            onClick={() => navigte("/")}
          ></img>
          <h2>Back to home</h2>
        </div>
        <CartPage />
      </nav>

      {pidDetail.map((product, index) => {
        const isProductInCart = checkProductInCart(product);
        const filterp = slices.filter((f) => f.category === product.category);
        const stars = product.stars;

        return (
          <>
            <button onClick={() => setValue(index + 1)}>sdsdsd</button>
            <div className="containerproductdetail" key={product.id}>
              <div className="productdetail">
                <div className="miniimages">
                  <img
                    onClick={() => setValue(0)}
                    src={product.images[0]}
                    alt="image1"
                    width="70px"
                    height="70px"
                  ></img>
                  <img
                    src={product.images[1]}
                    onClick={() => setValue(1)}
                    alt="image2"
                    width="70px"
                    height="70px"
                  ></img>
                  <img
                    src={product.images[2]}
                    onClick={() => setValue(2)}
                    alt="image2"
                    width="70px"
                    height="70px"
                  ></img>
                </div>
                <div className="containerpdimg">
                  <img src={product.images[value]} alt={product.title} />
                </div>
                <div className="pdcontent">
                  <StarRating stars={stars} />
                  <strong id="p-title">{product.title}</strong>
                  <strong id="p-price">${product.price}</strong>
                  <div className="padrebutton">
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
                      {isProductInCart
                        ? "Quitar del Carrito"
                        : "Añadir al Carrito"}
                      {isProductInCart ? (
                        <RemoveFromCartIcon />
                      ) : (
                        <AddToCartIcon />
                      )}
                    </button>
                  </div>
                  <p>Ver legales de promociones bancarias</p>
                  <p id="p-ccuotas">Calcula el valor en cuotas</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div></div>
            <br />
            <br />
            <div className="padreoctv">
              <h2 id="octv">Otros clientes tambien vieron</h2>
            </div>
            <Carousel similarprodct={filterp} />
          </>
        );
      })}
    </>
  );
}
