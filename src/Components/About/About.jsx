import './About.scss';
import Interiors from '../../assets/img/interiors.jpg';
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import MagicButton from '../../assets/Button/Button';

export default function AboutSection() {
  return (
    <section className="about-section">

      <div className="card-container">

        <div className="card-image">
          <img src={Interiors} alt="Интерьер кафе" 
          
          
          
          
          />
          
          <Link to="/coffee-varieties">
            
            
         
         <MagicButton text="Наши сорта кофе" />
       </Link>
     </div>

        <div className="card-text">
          <h2>Добро пожаловать в наш кофейный рай</h2>

          <p>
            Здесь каждое утро начинается с аромата свежемолотых зерен,
            мягкой музыки и выпечки, приготовленной вручную.  
            Мы собрали лучшее из французских традиций и 
            добавили уют винтажных интерьеров.
          </p>

          <Link to="/process" >
             <MagicButton text="о процессе приготовления " />
          </Link>
        </div>

      </div>

      <div className="stats">
        <div className="stat">
          <span className="number">25+</span>
          <p>Видов напитков</p>
        </div>

        <div className="stat">
          <span className="number">1 250+</span>
          <p>Довольных гостей</p>
        </div>
      </div>
    </section>
  );
}
