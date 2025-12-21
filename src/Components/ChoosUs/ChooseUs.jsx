
import { FaClock, FaMagic, FaCheckCircle, FaCogs } from 'react-icons/fa';
import "./ChooseUs.scss"
import { Link } from 'react-router-dom';
import MagicButton from '../../assets/Button/Button';

 function ChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="left">
          <h2>Почему выбирают нас</h2>
          <p>Мы заботимся о вкусе, уюте и каждом клиенте. Наша кофейня вдохновлена традициями и новыми тенденциями.</p>
          <Link to="/advantages">
  <MagicButton text="Посмотреть всё" />
</Link>
        </div>

        <div className="right">
          <div className="feature">
            <FaClock className="icon" />
            <h3>Быстрое обслуживание</h3>
            <p>Готовим заказы без задержек — с любовью и скоростью.</p>
          </div>
          <div className="feature">
            <FaMagic className="icon" />
            <h3>Атмосфера</h3>
            <p>Уютный интерьер с винтажными нотками и живой музыкой.</p>
          </div>
          <div className="feature">
            <FaCheckCircle className="icon" />
            <h3>Свежие продукты</h3>
            <p>Только натуральные ингредиенты и домашняя выпечка.</p>
          </div>
          <div className="feature">
            <FaCogs className="icon" />
            <h3>Онлайн-заказ</h3>
            <p>Удобная система предзаказа и самовывоза через сайт.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ChooseUs;
