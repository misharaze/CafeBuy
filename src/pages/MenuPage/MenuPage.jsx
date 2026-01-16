import { useState } from 'react';
import products from '../../data/Product';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductModal from '../../Components/ProductModal/ProductModal';
import MenuFilterButton from '../../assets/Button/MenuFilterButton.jsx';
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

      <section className="menu-hero">
        <h1>Le menu de notre café</h1>
        <p>Boissons signature et pâtisseries — avec soin et atmosphère.</p>
      </section>

      <div className="filter-buttons">
        <MenuFilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
          Tout
        </MenuFilterButton>
        <MenuFilterButton active={filter === 'coffee'} onClick={() => setFilter('coffee')}>
          Café
        </MenuFilterButton>
        <MenuFilterButton active={filter === 'pastry'} onClick={() => setFilter('pastry')}>
          Pâtisseries
        </MenuFilterButton>
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
