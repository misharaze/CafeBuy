import MagicButton from '../../assets/Button/Button';
import './CallToActionsBanner.scss';
import { Link } from 'react-router-dom';

export default function CallToActionBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Prêt à goûter le meilleur café de la ville ?</h2>
        <p>Commandez à l’avance et récupérez votre café à l’heure qui vous convient.</p>

        <Link to="/menu">
          <MagicButton size="sm" text="Voir le menu" />
        </Link>
      </div>
    </section>
  );
}
