import './Footer.scss';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

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
               <a
    href="https://vk.com/your_profile"
    aria-label="VK"
    target="_blank"
    rel="noopener noreferrer"
  >
    VK
  </a>

  <a
    href="https://www.instagram.com/your_profile"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.pinterest.com/your_profile"
    aria-label="Pinterest"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pinterest
  </a>
        </div>
      </div>
    </footer>
  );
}
