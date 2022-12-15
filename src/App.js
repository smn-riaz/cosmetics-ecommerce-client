import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicountText from "./components/DicountText";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { serverLink } from "./constants";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AddProductPage from "./pages/Dashboard/AddProductPage";
import AllCustomerPage from "./pages/Dashboard/AllCustomerPage";
import AllOrderPage from "./pages/Dashboard/AllOrderPage";
import AllProductPage from "./pages/Dashboard/AllProductPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductTypePage from "./pages/ProductTypePage/ProductTypePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { userActions } from "./store/user-slice";

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState();
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${serverLink}/product/allProduct`)
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
          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/dashboard/allCustomer" element={<PrivateRoute><AllCustomerPage /></PrivateRoute>} />
          <Route path="/dashboard/allProduct" element={<PrivateRoute><AllProductPage /></PrivateRoute>} />
          <Route path="/dashboard/allOrder" element={<PrivateRoute><AllOrderPage /></PrivateRoute>} />
          <Route path="/dashboard/addProduct" element={<PrivateRoute><AddProductPage /></PrivateRoute>} />
          {/* <Route path="*" element={<NotFoundPage /> } /> */}
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
