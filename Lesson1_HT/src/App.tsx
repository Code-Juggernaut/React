import React from 'react';
import './index.css';

interface Landmark {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const cityData = {
  name: "Вінниця",
  country: "Україна",
  foundedYear: 1363,
  description: "Затишне, сучасне та зелене місто на берегах Південного Бугу, відоме своєю гостинністю, фонтаном Roshen та розвиненою інфраструктурою.",
  landmarks: [
    {
      id: 1,
      title: "Світловий фонтан Roshen",
      imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSD_aOFmi35M_OfMPDGkroRpGj_djWymu0bdj7IjcV4MDfPP97fQ0l8kIFUhpksfz2FLehRtJEFvIHG4k4",
      description: "Найбільший у Європі плавучий світловий фонтан."
    },
    {
      id: 2,
      title: "Музей-садиба М. І. Пирогова",
      imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTm5qO5aG9ep5BmA0LISWoawxmFM54eoq9knZM4E0eZx6mObRd9R0ZIN3kT1aLJxoFPCSpWcsK2um4_M5A",
      description: "Меморіальний комплекс видатного хірурга та вченого."
    }
  ] as Landmark[]
};

export const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>{cityData.name}</h1>
        <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>Країна: <strong>{cityData.country}</strong> | Рік заснування: <strong>{cityData.foundedYear}</strong></p>
        <p style={{ lineHeight: '1.6', color: '#34495e' }}>{cityData.description}</p>
      </header>

      <section>
        <h2 style={{ borderBottom: '2px solid #3498db', paddingBottom: '5px', color: '#2980b9' }}>Визначні пам'ятки</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {cityData.landmarks.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{item.title}</h3>
                <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};



export default App;