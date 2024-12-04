import { CartProvider } from "./context/cart.jsx";
import { Home } from "./pages/Home.jsx";
import { ErrorPage } from "./pages/NotFound.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Cart } from "./components/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/:rest/*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}
export default App;
