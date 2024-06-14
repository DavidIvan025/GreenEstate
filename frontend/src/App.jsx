import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* Main Pages */
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Blog from './pages/Blog'
/* Utility Pages */
import Demo from './pages/utility_pages/Demo'
import Terms from './pages/utility_pages/TermsAndConditions'
import Cookies from './pages/utility_pages/CookieSetting'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <header /> */}
        <div className="container">
          <Routes>

            <Route path="/" index element={<Home />} />
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
    </>
  )
}

export default App
