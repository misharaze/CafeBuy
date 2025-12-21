import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="page notfound-page">
      <h2>404 — Страница не найдена</h2>
      <p>Похоже, вы свернули не туда. Попробуйте вернуться на главную.</p>
      <Link to="/" className="back-button">На главную</Link>
    </div>
  );
}
