import './Location.scss';

export default function Location() {
  return (
    <section className="location-section">
      <div className="location-content">
        <div className="info">
          <h2>Où nous trouver</h2>

          <p>
            Café Nostalgie est un lieu où le temps ralentit.
            Nous sommes situés en plein cœur de Moscou.
          </p>

          <div className="schedule">
            <h4>Horaires d’ouverture</h4>
            <p>Lun–Ven : 08:00 – 20:00</p>
            <p>Sam–Dim : 09:00 – 22:00</p>
          </div>

          <p className="address">
            📍 Moscou, rue Tverskaïa, 7
          </p>
        </div>

        <div className="map">
          <iframe
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Moscou,+rue+Tverskaïa,+7&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
