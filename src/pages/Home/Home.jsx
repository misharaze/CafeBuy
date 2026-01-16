import './Home.scss';
import Cofee from '../../assets/img/CoffeeCup.jpg';
import { Leaf, Coffee, Timer } from 'lucide-react'; 
import About from '../../Components/About/About';
import ChooseUs from '../../Components/ChoosUs/ChooseUs';
import CallToActionBanner from '../../Components/CallToActionsBanner/CallToActionsBanner';
import Gallery from '../../Components/Gallery/Gallery';
import Location from '../../Components/Location/Location';
import Reviews from '../../Components/Reviews/Reviews';
import ScrollReveal from "../../utils/scrollReveal.jsx";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import MagicButton from '../../assets/Button/Button';
import GlassButton from '../../assets/Button/GlassButton.jsx';
import StatsRibbon from '../../Components/StatsRibbon/StatsRibbon.jsx';

export default function Home() {
  return (
    <div className="page home-page">

      {/* FLOATING PARTICLES */}
      <div className="floating-particles">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* HERO FRAME */}
      <section className="hero-frame">
        <div className="corner tl" />
        <div className="corner tr" />
        <div className="corner bl" />
        <div className="corner br" />
        <div className="hero-glow" />

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="hero-section">

            {/* TEXT */}
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
                Bienvenue
              </motion.h1>

              <motion.p
                className="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Un café vintage au parfum de pâtisseries fraîches
                et à l’atmosphère chaleureuse
              </motion.p>

              <motion.div
                className="buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/menu">
                  <GlassButton size="sm" text="Voir le menu" />
                </Link>
                <Link to="/contact">
                  <MagicButton size="sm" text="Nous contacter" />
                </Link>
              </motion.div>

              <motion.div
                className="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="feature">
                  <Coffee size={28} />
                  <span>100 % Arabica</span>
                </div>
                <div className="feature">
                  <Timer size={28} />
                  <span>Prêt en 3 minutes</span>
                </div>
                <div className="feature">
                  <Leaf size={28} />
                  <span>Ingrédients naturels</span>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="steam-wrap">
                <span className="steam s1" />
                <span className="steam s2" />
                <span className="steam s3" />
              </div>
              <img src={Cofee} alt="Café" />
            </motion.div>

          </div>
        </motion.div>
      </section>

      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><StatsRibbon /></ScrollReveal>
      <ScrollReveal><Gallery /></ScrollReveal>
      <ScrollReveal><ChooseUs /></ScrollReveal>
      <ScrollReveal><Reviews /></ScrollReveal>
      <ScrollReveal><Location /></ScrollReveal>
      <ScrollReveal><CallToActionBanner /></ScrollReveal>

    </div>
  );
}
