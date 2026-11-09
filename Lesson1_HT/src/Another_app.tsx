import React from 'react';

interface Review {
  id: number;
  author: string;
  comment: string;
  rating: number;
}

interface Book {
  title: string;
  authorFullName: string;
  genre: string;
  pagesCount: number;
  synopsis: string;
  reviews: Review[];
}

const favoriteBook: Book = {
  title: "Дюна (Dune)",
  authorFullName: "Френк Герберт (Frank Herbert)",
  genre: "Наукова фантастика",
  pagesCount: 412,
  synopsis: "Епічна історія про планету Арракіс, єдине джерело найціннішої речовини у Всесвіті — «прянощі» (меланжу), та політичні інтриги навколо будинку Атрідів.",
  reviews: [
    {
      id: 1,
      author: "Олександр",
      comment: "Неймовірна атмосфера та глибокий світ. Класика фантастики, яка випереджає свій час.",
      rating: 5
    },
    {
      id: 2,
      author: "Марина",
      comment: "Книга складна для першого читання через купу термінів, але сюжет затягує неймовірно.",
      rating: 4.5
    }
  ]
};

export const BookApp: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', padding: '30px', maxWidth: '700px', margin: '0 auto', background: '#f9f9f9', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h1 style={{ color: '#d35400', marginBottom: '5px' }}>{favoriteBook.title}</h1>
      <h3 style={{ color: '#555', marginTop: '0' }}>Автор: {favoriteBook.authorFullName}</h3>
      
      <div style={{ background: '#fff', padding: '15px 20px', borderRadius: '8px', margin: '20px 0', borderLeft: '4px solid #e67e22' }}>
        <p><strong>Жанр:</strong> {favoriteBook.genre}</p>
        <p><strong>Кількість сторінок:</strong> {favoriteBook.pagesCount}</p>
        <p><strong>Опис:</strong> {favoriteBook.synopsis}</p>
      </div>

      <section>
        <h2 style={{ color: '#2c3e50', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>Рецензії читачів</h2>
        {favoriteBook.reviews.map((rev) => (
          <div key={rev.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <strong>{rev.author}</strong>
              <span style={{ color: '#f39c12' }}>{'★'.repeat(Math.floor(rev.rating))} ({rev.rating}/5)</span>
            </div>
            <p style={{ margin: '0', color: '#666', fontStyle: 'italic' }}>"{rev.comment}"</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BookApp;