import { motion } from "framer-motion";
import MenuActionButton from "../../assets/Button/MenuActionButton.jsx";
import './ProductCard.scss';

export default function ProductCard({ product, onAddToCart, onOpen }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => onOpen(product)}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="product-image"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: .4 }}
      />

      <div className="product-info">
       
        <motion.h3
          className="glow-title"
          animate={{
            textShadow: [
              "0 0 6px rgba(198,156,109,.4)",
              "0 0 16px rgba(198,156,109,.8)",
              "0 0 6px rgba(198,156,109,.4)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {product.name}
        </motion.h3>

        <p className="description">{product.description}</p>
        <p className="price">{product.price.toFixed(2)} €</p>

        <MenuActionButton size="large" onClick={() => onAddToCart(product)}>
          Dans le panier
        </MenuActionButton>
      </div>
    </motion.div>
  );
}
