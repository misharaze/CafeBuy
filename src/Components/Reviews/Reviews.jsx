import './Reviews.scss';

const reviews = [
  {
    name: 'Émilie',
    text: 'Латте здесь — мой утренний ритуал. Атмосфера напоминает маленькие парижские кофейни.',
    role: 'Постоянный гость'
  },
  {
    name: 'Lucas',
    text: 'Очень тёплое место: можно поработать за ноутбуком и насладиться десертами.',
    role: 'Фрилансер'
  },
  {
    name: 'Sophie',
    text: 'Люблю приходить сюда вечерами: мягкий свет, музыка и идеальный капучино.',
    role: 'Ценитель кофе'
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>Отзывы гостей</h2>
        <p>Несколько слов от тех, кто уже нашёл своё уютное место в Café Nostalgie.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.name}>
            <p className="text">“{r.text}”</p>
            <p className="name">{r.name}</p>
            <p className="role">{r.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
