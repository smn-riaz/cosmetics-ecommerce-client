import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicountText from "./components/DicountText";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductTypePage from "./pages/ProductTypePage/ProductTypePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <DicountText />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductTypePage />} />
        <Route path="/product/:producttype" element={<ProductsPage />} />
        <Route
          path="/product/:producttype/:product"
          element={<ProductPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
