import { useParams } from "react-router";
import { useState } from "react";
import { productos } from "../mocks/products.json";
import { AddToCartIcon, RemoveFromCartIcon } from "../components/Icons.jsx";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { FaStoreAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiHeart3Fill } from "react-icons/ri";
import { useCart } from "../hooks/useCart.js";
import { Navbar } from "../components/Navbar.jsx";
import StarRating from "../components/StarRating.jsx";
import "./ProductDetail.css";
import { useWishList } from "../hooks/useWishList.js";
import { productos as OtherProducts } from "../mocks/products.json";

import { Carousel } from "../components/SimilarProducts.jsx";

export function ProductDetail() {

  const [value, setValue] = useState(0);
  const [optionsIndex, setOptionsIndex] = useState(0);
  const pid = useParams();
  const pidDetail = productos.filter((x) => x.id === parseInt(pid.id));

  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    const checked = cart.some((item) => item.id === product.id);
    return checked;
  };

  const { addToWishList, removeFromWishList, wishlist } = useWishList();

  const checkProductInWishList = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const slices = OtherProducts.slice(30, 97);

  return (
    <>
      <Navbar />
      <section>
        {pidDetail.map((product) => {
          const isProductInCart = checkProductInCart(product);
          const filterp = slices.filter((f) => f.category === product.category);
          const stars = product.stars;

          const isProductInWishList = checkProductInWishList(product);

          const optionsinfo = [
            {
              id: "recAGJfiU4CeaV0HL",
              titulo: "Especificaciones tecnicas",
              elementos: (
                <div className="technical-specs-table">
                  <p>Tipo de producto</p>
                  <p>{product.category}</p>
                </div>
              ),
            },
            {
              id: "cerIL6mJNfWObonls",
              titulo: "Description",
              elementos: (
                <div className="description">
                  <div className="padrebrand">
                    <p id="brand">{product.title}</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit magna
                    orci velit, mi purus lacus ridiculus integer odio libero
                    semper porta. Aliquet laoreet nibh pretium sapien libero
                    gravida venenatis nunc, lectus rhoncus class tellus conubia
                    dis morbi parturient diam, commodo est luctus habitasse
                    ultrices nulla eros. Scelerisque taciti vitae pellentesque
                    per phasellus fringilla vulputate parturient purus nec,
                    massa eleifend imperdiet magna fermentum pretium nunc diam
                    netus suspendisse morbi, nisl dictum posuere mi inceptos
                    hendrerit ac pharetra justo.
                  </p>
                </div>
              ),
            },
            {
              id: "cfg61x18GVY99hQq5",
              titulo: "Medios de pago",
              elementos: (
                <div className="method-payment">
                  <div className="method-payment-child">
                    <CiCreditCard1 size={40} />
                    <p>Tarjetas de crédito</p>
                    <p>Pagá en 1, 3 y 6 cuotas fijas</p>
                    <p>Acreditacion instantanea</p>
                    <img
                      src="https://i.ibb.co/Zmm1t8T/Untitled-design-44.png"
                      alt="credit-cards"
                    ></img>
                  </div>
                  <div className="method-payment-child">
                    <div className="padreimgiconinfo">
                      <CiCreditCard1 size={40} />
                    </div>
                    <p>Tarjetas de débito</p>
                    <p>Pagá con tarjeta de débito con Visa, Master, Cabal</p>
                    <p>Acreditacion instantanea</p>
                  </div>
                  <div className="method-payment-child">
                    <div className="padreimgiconinfo">
                      <img
                        src="https://i.ibb.co/tCbd8nG/1-png.png"
                        alt="mercadopago"
                      ></img>
                    </div>
                    <p>Mercado Pago</p>
                    <p>Pagá con Mercadopago en 6 cuotas fijas</p>
                    <p>Acreditacion instantanea</p>
                  </div>
                  <div className="method-payment-child">
                    <div className="padreimgiconinfo">
                      <CiBank size={40}></CiBank>
                    </div>
                    <p>Transferencia bancaria y efectivo</p>
                    <p>
                      Pagá con transferencia bancaria o en efectivo en nuestra
                      sucursal
                    </p>
                  </div>
                </div>
              ),
            },
            {
              id: "ckh93f29MBNZ88lMn0",
              titulo: "Envios",
              elementos: (
                <div className="delivery">
                  <div className="delivery-child mobile">
                    <div className="padreimgiconinfo">
                      <CiDeliveryTruck size={50} />
                    </div>
                    <p>Envio gratuito con seguro total</p>
                    <p>A todo el pais a través de Andreani</p>
                  </div>
                  <div className="delivery-child">
                    <div className="padreimgiconinfo">
                      <FaStoreAlt size={40} />
                    </div>
                    <p>Retiralo gratis en nuestro local</p>
                    <p>Buscalo en Calle Inventada, de 9 a 18 hs</p>
                  </div>
                </div>
              ),
            },
          ];

          const { elementos } = optionsinfo[optionsIndex];

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
                        {product.images?.map((img, id) => (
                          <img
                            src={img}
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
                    <div className="containerprice">
                      <span id="price">{`$${product.price}`}</span>
                      {product.discountPercentage ? (
                        <p id="p-descuent">
                          {product.discountPercentage}%
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <RiHeart3Fill
                      className="heart"
                      style={{
                        color: isProductInWishList ? "red" : "",
                      }}
                      onClick={() => {
                        isProductInWishList
                          ? removeFromWishList(product)
                          : addToWishList(product);
                      }}
                    />
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
                    <p id="vldpb">Ver legales de promociones bancarias</p>
                    <p id="p-ccuotas">Calcula el valor en cuotas</p>
                  </div>
                </div>
              </div>

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
              <br />
              <div className="options">
                {optionsinfo.map((oi, index) => {
                  return (
                    <p
                      className={optionsIndex === index ? "active" : ""}
                      onClick={() => setOptionsIndex(index)}
                    >
                      {oi.titulo}
                    </p>
                  );
                })}
              </div>
              <div className="containerinfo">{elementos}</div>
            </>
          );
        })}
      </section>
    </>
  );
}
