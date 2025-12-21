import './Gallery.scss';
import img1 from '../../assets/img/coffeerelax.png';
import img2 from '../../assets/img/interiors.jpg';
import img3 from '../../assets/img/coffedesert.jpg';

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Атмосфера Café Nostalgie</h2>
        <p>
          Каждая деталь нашего пространства создана для уюта, спокойствия
          и наслаждения моментом.
        </p>
      </div>

      <div className="gallery-grid">
        <img src={img1} alt="Интерьер кофейни" />
        <img src={img2} alt="Кофе и десерты" />
        <img src={img3} alt="Уютное пространство" />
      </div>
    </section>
  );
}
