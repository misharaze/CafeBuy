import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home  from "./pages/Home/Home.jsx"
import Contact from "./pages/ContactPage/ContactPage.jsx";
import Cart from './pages/CartPage/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import MenuPage from './pages/MenuPage/MenuPage.jsx';
import NotFoundPage from './pages/NotfoundPage/NotFoundPage.jsx';
import ProcessPage from "./pages/ProcessPage/ProcessPage.jsx";
import VarietiesPage from "./pages/VarietiesPage/VarietiesPage.jsx";
import AdvantagesPage from "./pages/AdvantagesPage/AdvantagesPage";

import React from 'react';
import "./styles/main.scss"
import "./index.css"


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/coffee-varieties" element={<VarietiesPage />} />
            <Route path="/advantages" element={<AdvantagesPage />} />
      
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
