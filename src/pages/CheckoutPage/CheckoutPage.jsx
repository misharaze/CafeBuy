import { useForm, } from 'react-hook-form';
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
      <h2>Оформление заказа</h2>
      {sent ? (
        <p className="success">Спасибо за заказ! Мы свяжемся с вами.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <label>
            Имя
            <input {...register('name', { required: 'Введите имя' })} />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </label>

          <label>
            Телефон
            <input {...register('phone', {
              required: 'Введите номер телефона',
              pattern: {
                value: /^[+0-9\s\-()]{7,20}$/,
                message: 'Некорректный формат телефона'
              }
            })} />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </label>

          <label>
            Время получения
            <input {...register('time')} placeholder="напр. 15:00" />
          </label>

          <label>
            Комментарий
            <textarea {...register('comment')} />
          </label>

          <button type="submit">Отправить заказ</button>
        </form>
      )}
    </div>
  );
}
