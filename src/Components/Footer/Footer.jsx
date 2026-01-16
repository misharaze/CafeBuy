import './Footer.scss';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="branding">
          <h3>Café Nostalgie</h3>
          <p>Un parfum de vintage et de café © 2025</p>
        </div>

        <div className="contact">
          <p><FaMapMarkerAlt /> Paris, rue du Café, 7</p>
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
