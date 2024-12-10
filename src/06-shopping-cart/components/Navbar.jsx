import { useNavigate } from "react-router-dom";
import { RiHeart3Fill } from "react-icons/ri";
import CartPage from "../pages/CartPage.jsx";
import { Header } from "../components/Header.jsx";
import "./Navbar.css";
export function Navbar() {
  const navigte = useNavigate();
  return (
    <nav className="nav">
      <div onClick={() => navigte("/")}>
        <Header />
      </div>
      <div className="padreheart" onClick={() => navigte("/wishlist")}>
        <RiHeart3Fill className="heart" />
      </div>
      <CartPage />
    </nav>
  );
}
