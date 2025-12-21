import './Location.scss';

export default function Location() {
  return (
    <section className="location-section">
      <div className="location-content">
        <div className="info">
          <h2>Где мы находимся</h2>

          <p>
            Café Nostalgie — это место, где время замедляется.
            Мы находимся в самом сердце города.
          </p>

          <div className="schedule">
            <h4>Часы работы</h4>
            <p>Пн–Пт: 08:00 – 20:00</p>
            <p>Сб–Вс: 09:00 – 22:00</p>
          </div>

          <p className="address">
            📍 Paris, Rue du Café, 12
          </p>
        </div>

        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Paris&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
