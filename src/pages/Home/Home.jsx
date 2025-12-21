
import './Home.scss';
import Cofee from '../../assets/img/CoffeeCup.jpg';
import { Leaf, Coffee, Timer } from 'lucide-react'; 
import About from '../../Components/About/About';
import ChooseUs from '../../Components/ChoosUs/ChooseUs';
import CallToActionBanner from '../../Components/CallToActionsBanner/CallToActionsBanner';
import Gallery from '../../Components/Gallery/Gallery';
import Location from '../../Components/Location/Location';
import { motion } from "framer-motion";
import MagicButton from '../../assets/Button/Button';
import Reviews from '../../Components/Reviews/Reviews';
import ScrollReveal from "../../utils/scrollReveal.jsx"


export default function Home() {
  return (
    <div className="page home-page">
      
      <section className="hero-card">
        <div className="hero-section">

          {/* TEXT SECTION */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            Добро пожаловать
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Винтажная кофейня с ароматом свежей выпечки и уютной атмосферой
            </motion.p>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
           <MagicButton text="Смотреть меню" />
           <MagicButton text="связаться с нами" />
            </motion.div>

            <motion.div
              className="features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="feature">
                <Coffee size={32} />
                <span>Арабика 100%</span>
              </div>
              <div className="feature">
                <Timer size={32} />
                <span>Готовим за 3 минуты</span>
              </div>
              <div className="feature">
                <Leaf size={32} />
                <span>Натуральные ингредиенты</span>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={Cofee} alt="Кофе в чашке" />
          </motion.div>

        </div>
      </section>

      <ScrollReveal>
      <About />
      </ScrollReveal>

         <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal>
        <ChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <Reviews />
      </ScrollReveal>

      <ScrollReveal>
        <Location />
      </ScrollReveal>

      <ScrollReveal>
        <CallToActionBanner />
      </ScrollReveal>

    </div>
  );
}