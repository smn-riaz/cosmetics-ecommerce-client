import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicountText from "./components/DicountText";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductTypePage from "./pages/ProductTypePage/ProductTypePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductTypePage />} />
        <Route path="/product/:producttype" element={<ProductsPage />} />
        <Route
          path="/product/:producttype/:product"
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
