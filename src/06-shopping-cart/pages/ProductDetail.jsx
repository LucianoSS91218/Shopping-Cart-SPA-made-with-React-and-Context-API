import { useParams } from "react-router";
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
      <div className="nav">
        <div id="home">
          <img
            src={Home}
            width="105px"
            height="95px"
            onClick={() => navigte("/")}
          ></img>
          <h2>Back to home</h2>
        </div>
      </div>
      <div className="containercp">
        <CartPage />
      </div>

      {pidDetail.map((product) => {
        const isProductInCart = checkProductInCart(product);
        const filterp = slices.filter((f) => f.category === product.category);
        const stars = product.stars;

        return (
          <>
            <div className="containerproductdetail">
              <div className="productdetail" key={product.id}>
                <div className="containerpdimg">
                  <img src={product.thumbnail} alt={product.title} />
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
            <h2 id="octv">Otros clientes tambien vieron</h2>
            <Carousel similarprodct={filterp} />
          </>
        );
      })}
    </>
  );
}
