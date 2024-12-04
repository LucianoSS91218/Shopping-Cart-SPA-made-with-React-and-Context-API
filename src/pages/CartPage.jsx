import { useNavigate } from "react-router-dom";
import { CartIcon } from "../components/Icons";
import { useId } from "react";
import { useCart } from "../hooks/useCart";
import "./CartPage.css";
export default function CartPage() {
  const cartCheckboxId = useId();
  const navigte = useNavigate();
  const { cart } = useCart();
  return (
    <div className="containercp">
      <label
        className="cart-button"
        htmlFor={cartCheckboxId}
        onClick={() => navigte("/cart")}
      >
        <CartIcon />
        {cart.length}
      </label>
    </div>
  );
}
