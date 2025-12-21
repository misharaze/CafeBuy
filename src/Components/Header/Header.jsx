import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">

        <Link to="/" className="logo">
          Café Nostalgie
        </Link>

        {/* BURGER */}
        <motion.div
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.85 }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </motion.div>

        {/* DESKTOP */}
        <ul className="nav-links desktop">
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>

        {/* MOBILE */}
        <AnimatePresence>
          {open && (
            <motion.ul
              className="nav-links mobile"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.35 }}
            >
              <li onClick={() => setOpen(false)}><Link to="/menu">Меню</Link></li>
              <li onClick={() => setOpen(false)}><Link to="/cart">Корзина</Link></li>
              <li onClick={() => setOpen(false)}><Link to="/contact">Контакты</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
