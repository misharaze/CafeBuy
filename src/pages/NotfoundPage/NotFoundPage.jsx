import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="page notfound-page">
      <h2>404 — Page non trouvée</h2>
      <p>Il semble que vous vous soyez égaré. Essayez de revenir à l’accueil.</p>
      <Link to="/" className="back-button">Retour à l’accueil</Link>
    </div>
  );
}
