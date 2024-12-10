import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { productos } from "../mocks/products.json";
import { AddToCartIcon, RemoveFromCartIcon } from "../components/Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { Navbar } from "../components/Navbar.jsx";
import StarRating from "../components/StarRating.jsx";
import "./ProductDetail.css";
import { productos as OtherProducts } from "../mocks/products.json";

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

  return (
    <>
      <Navbar />
      <section>
        {pidDetail.map((product) => {
          const isProductInCart = checkProductInCart(product);
          const filterp = slices.filter((f) => f.category === product.category);
          const stars = product.stars;

          return (
            <>
              <div className="containerproductdetail" key={product.id}>
                <div className="productdetail">
                  <div className="containerpdimg">
                    <div className="padremainimage">
                      <img
                        id="thumbnail"
                        src={
                          product.images
                            ? product.images[value]
                            : product.thumbnail
                        }
                        alt={product.title}
                      />
                    </div>
                    {product.images ? (
                      <div className="miniimages">
                        {product.images?.map((x, id) => (
                          <img
                            src={x}
                            alt={id}
                            onClick={() => setValue(id)}
                          ></img>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
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
              <div></div>

              {filterp.length > 1 ? (
                <>
                  <br />
                  <br />
                  <div className="padreoctv">
                    <h2 id="octv">Otros clientes tambien vieron</h2>
                  </div>
                  <Carousel similarprodct={filterp} />
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
      </section>
    </>
  );
}
