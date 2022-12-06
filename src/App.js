import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
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
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState();
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/product/allProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);


  return (
    <ProductsContext.Provider value={{products, user, setUser}}>
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
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
