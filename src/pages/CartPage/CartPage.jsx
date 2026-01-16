import MenuActionButton from '../../assets/Button/MenuActionButton';
import { useCart } from '../../Context/CartContext';
import './CartPage.scss';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="page cart-page">
      <h2>Panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
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
                <MenuActionButton onClick={() => removeFromCart(item.id)}>
                  Supprimer
                </MenuActionButton>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total : {getTotal().toFixed(2)} €</p>
            <MenuActionButton onClick={clearCart} className="clear-btn">
              Vider le panier
            </MenuActionButton>
          </div>
        </>
      )}
    </div>
  );
}
