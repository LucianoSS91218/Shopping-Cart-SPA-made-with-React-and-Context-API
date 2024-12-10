import { CartProvider } from "./context/cart.jsx";
import { Home } from "./pages/Home.jsx";
import { ErrorPage } from "./pages/NotFound.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Cart } from "./components/Cart.jsx";
import { WishList } from "./components/WishList.jsx";
import { WishListProvider } from "./context/wishlist.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CartProvider>
        <WishListProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="/:rest/*" element={<ErrorPage />} />
          </Routes>
        </WishListProvider>
      </CartProvider>
    </Router>
  );
}
export default App;
