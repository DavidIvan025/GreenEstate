import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Main Pages */
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
/* Utility Pages */
import Demo from "./pages/utility_pages/Demo";
import Terms from "./pages/utility_pages/TermsAndConditions";
import Cookies from "./pages/utility_pages/CookieSetting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="content-grid">
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/sell" element={<Sell />} />
            <Route exact path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
