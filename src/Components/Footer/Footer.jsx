import './Footer.scss';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="branding">
          <h3>Café Nostalgie</h3>
          <p>Винтаж с ароматом кофе © 2025</p>
        </div>

        <div className="contact">
          <p><FaMapMarkerAlt /> Париж, ул. Кофейная, 7</p>
          <p><FaEnvelope /> hello@nostalgie.fr</p>
        </div>

        <div className="social">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
}
