import React from 'react';

interface RestaurantProps {
  name: string;
  address: string;
  rating: number;
  cuisineType: string;
  imageUrl: string;
}

export const RestaurantCard: React.FC<RestaurantProps> = ({
  name,
  address,
  rating,
  cuisineType,
  imageUrl,
}) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '10px', 
      padding: '16px', 
      maxWidth: '350px', 
      fontFamily: 'Arial, sans-serif', 
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      background: '#fff'
    }}>
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }} 
      />
      <h2 style={{ margin: '12px 0 8px 0', color: '#2c3e50' }}>{name}</h2>
      <p style={{ margin: '4px 0', color: '#555' }}><strong>Адреса:</strong> {address}</p>
      <p style={{ margin: '4px 0', color: '#555' }}><strong>Кухня:</strong> {cuisineType}</p>
      <p style={{ margin: '8px 0 0 0', color: '#e67e22', fontWeight: 'bold' }}>
        Рейтинг: ⭐ {rating} / 5
      </p>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <div style={{ padding: '30px', background: '#f5f6fa', minHeight: '100vh' }}>
      <RestaurantCard 
        name="«Смачна хата»"
        address="вул. Соборна, 15, Вінниця"
        rating={4.8}
        cuisineType="Українська / Європейська"
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500"
      />
    </div>
  );
};

export default App;