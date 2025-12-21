import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import './ProductModal.scss';

const sizes = [
  { label: "Маленький", multiplier: 1 },
  { label: "Средний", multiplier: 1.3 },
  { label: "Большой", multiplier: 1.6 },
];

export default function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState(sizes[1]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  if (!product) return null;

  const finalPrice = (product.price * size.multiplier * qty).toFixed(2);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 140 }}
        >
          {/* IMAGE */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="modal-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <div className="modal-info">

            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {product.name}
            </motion.h2>

            <motion.p
              className="desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .15 }}
            >
              {product.description}
            </motion.p>

            {/* RATING */}
            <motion.div
              className="rating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .25 }}
            >
              ⭐⭐⭐⭐⭐
            </motion.div>

            {/* SIZE */}
            <motion.div
              className="size-selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .35 }}
            >
              {sizes.map((s) => (
                <button
                  key={s.label}
                  className={size.label === s.label ? "active" : ""}
                  onClick={() => setSize(s)}
                >
                  {s.label}
                </button>
              ))}
            </motion.div>

            {/* QUANTITY */}
            <motion.div
              className="qty-selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .45 }}
            >
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </motion.div>

            {/* PRICE */}
            <motion.p
              className="price"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {finalPrice} €
            </motion.p>

            {/* ADD BUTTON */}
            <motion.button
              className="add-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 0 18px rgba(198,156,109,.4)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                onAdd({ ...product, quantity: qty });
                onClose();
              }}
            >
              Добавить в корзину
            </motion.button>

            <motion.button
              className="close-btn"
              onClick={onClose}
              whileHover={{ opacity: 0.7 }}
            >
              Закрыть
            </motion.button>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
