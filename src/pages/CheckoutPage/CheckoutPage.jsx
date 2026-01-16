import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCart } from '../../Context/CartContext.jsx';
import emailjs from '@emailjs/browser';
import './CheckoutPage.scss';

export default function CheckoutPage() {
  const { cartItems, getTotal, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = (data) => {
    const message = cartItems.map(i => `${i.name} × ${i.quantity}`).join('\n');
    const templateParams = {
      name: data.name,
      phone: data.phone,
      time: data.time,
      comment: data.comment,
      order: message,
      total: getTotal().toFixed(2)
    };

    emailjs.send('service_id', 'template_id', templateParams, 'user_key')
      .then(() => {
        setSent(true);
        clearCart();
        reset();
      });
  };

  return (
    <div className="page checkout-page">
      <h2>Finalisation de la commande</h2>

      {sent ? (
        <p className="success">
          Merci pour votre commande ! Nous vous contacterons très prochainement.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">

          <label>
            Nom
            <input {...register('name', { required: 'Veuillez saisir votre nom' })} />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </label>

          <label>
            Téléphone
            <input
              {...register('phone', {
                required: 'Veuillez saisir votre numéro de téléphone',
                pattern: {
                  value: /^[+0-9\s\-()]{7,20}$/,
                  message: 'Format de téléphone incorrect'
                }
              })}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </label>

          <label>
            Heure de retrait
            <input {...register('time')} placeholder="ex. 15:00" />
          </label>

          <label>
            Commentaire
            <textarea {...register('comment')} />
          </label>

          <button type="submit">
            Envoyer la commande
          </button>
        </form>
      )}
    </div>
  );
}
