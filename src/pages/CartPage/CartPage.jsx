import { useCart } from '../../Context/CartContext';
import './CartPage.scss';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="page cart-page">
      <h2>Корзина</h2>

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.quantity} × {item.price.toFixed(2)} €</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Итого: {getTotal().toFixed(2)} €</p>
            <button onClick={clearCart} className="clear-btn">Очистить корзину</button>
          </div>
        </>
      )}
    </div>
  );
}
