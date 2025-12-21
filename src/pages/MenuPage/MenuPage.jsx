import { useState } from 'react';
import products from '../../data/Product';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductModal from '../../Components/ProductModal/ProductModal';
import { useCart } from '../../Context/CartContext';
import './MenuPage.scss';

export default function MenuPage() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all'
    ? products
    : products.filter((p) => p.category === filter);

  return (
    <div className="page menu-page">

      {/* hero */}
      <section className="menu-hero">
        <h1>Меню нашей кофейни</h1>
        <p>Авторские напитки и выпечка — с заботой и атмосферой.</p>
      </section>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Все</button>
        <button onClick={() => setFilter('coffee')} className={filter === 'coffee' ? 'active' : ''}>Кофе</button>
        <button onClick={() => setFilter('pastry')} className={filter === 'pastry' ? 'active' : ''}>Выпечка</button>
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={setSelected}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onAdd={addToCart}
      />
    </div>
  );
}
