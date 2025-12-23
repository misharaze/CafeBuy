import MagicButton from '../../assets/Button/Button';
import './CallToActionsBanner.scss';
import { Link } from 'react-router-dom';

export default function CallToActionBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Готовы попробовать лучший кофе в городе?</h2>
        <p>Сделайте заказ заранее и заберите в удобное для вас время.</p>
       
        <Link to="/menu">
          <MagicButton size='sm' text="Перейти в меню"/>
         </Link>
   
      </div>
    </section>
  );
}
