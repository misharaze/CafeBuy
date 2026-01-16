import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 80) {
        setHidden(true);   // scroll down — hide
      } else {
        setHidden(false);  // scroll up — show
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${hidden ? "hidden" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: hidden ? -90 : 0,
        opacity: hidden ? 0 : 1
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <nav className="nav">

        {/* LOGO */}
        <Link to="/" className="logo">
          Café Arc-en-ciel
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links desktop">
          {["Menu", "Panier", "Contact"].map((item, i) => (
            <li key={i}>
              <NavLink
                to={`/${
                  item === "Menu"
                    ? "menu"
                    : item === "Panier"
                    ? "cart"
                    : "contact"
                }`}
              >
                <span>{item}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BURGER */}
        <motion.div
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.85 }}
        >
          <span />
          <span />
          <span />
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.ul
              className="nav-links mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <li onClick={() => setOpen(false)}>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink to="/cart">Panier</NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* THEME SWITCH */}
        <div className="switch-wrapper" onClick={toggleTheme}>
          <motion.div
            className={`switch-knob ${theme === "light" ? "light" : ""}`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          />
        </div>

      </nav>
    </motion.header>
  );
}
