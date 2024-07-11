<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Main Pages */
import Header from "./layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
/* Main Pages */
import Header from './layout/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Blog from './pages/Blog'
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
/* Utility Pages */
import Demo from "./pages/utility_pages/Demo";
import Terms from "./pages/utility_pages/TermsAndConditions";
import Cookies from "./pages/utility_pages/CookieSetting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="glb-Wrapper">
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
