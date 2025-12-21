import { motion } from "framer-motion";
import './ProductCard.scss';

export default function ProductCard({ product, onAddToCart , onOpen}) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      onClick={() => onOpen(product)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="product-image"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: .3 }}
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{product.price.toFixed(2)} €</p>

        <motion.button
          onClick={() => onAddToCart(product)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 18px rgba(198,156,109,.4)"
          }}
          whileTap={{ scale: 0.96 }}
        >
          В корзину
        </motion.button>
      </div>
    </motion.div>
  );
}
