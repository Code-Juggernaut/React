import React, { useState } from 'react';

interface RestaurantData {
  name: string;
  address: string;
  rating: number;
  cuisineType: string;
  imageUrl: string;
}

export const EditableRestaurantApp: React.FC = () => {
  const [restaurant, setRestaurant] = useState<RestaurantData>({
    name: "«Смачна хата»",
    address: "вул. Соборна, 15, Вінниця",
    rating: 4.8,
    cuisineType: "Українська / Європейська",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500"
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [formData, setFormData] = useState<RestaurantData>(restaurant);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseFloat(value) || 0 : value
    }));
  };

  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setRestaurant(formData); 
    setIsEditing(false);     
  };

  
  const handleCancel = () => {
    setFormData(restaurant); 
    setIsEditing(false);
  };

  return (
    <div style={{ 
      padding: '30px', 
      maxWidth: '400px', 
      margin: '30px auto',
      fontFamily: 'Arial, sans-serif', 
      background: '#f9f9f9', 
      borderRadius: '12px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
    }}>
      {!isEditing ? (
        
        <div>
          <img 
            src={restaurant.imageUrl} 
            alt={restaurant.name} 
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} 
          />
          <h2 style={{ margin: '15px 0 8px 0', color: '#2c3e50' }}>{restaurant.name}</h2>
          <p style={{ margin: '4px 0', color: '#555' }}><strong>Адреса:</strong> {restaurant.address}</p>
          <p style={{ margin: '4px 0', color: '#555' }}><strong>Кухня:</strong> {restaurant.cuisineType}</p>
          <p style={{ margin: '8px 0 20px 0', color: '#e67e22', fontWeight: 'bold' }}>
            Рейтинг: ⭐ {restaurant.rating} / 5
          </p>
          
          <button 
            onClick={() => { setFormData(restaurant); setIsEditing(true); }}
            style={{ 
              width: '100%', padding: '10px', background: '#3498db', color: '#fff', 
              border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' 
            }}
          >
            Редагувати інформацію
          </button>
        </div>
      ) : (
        
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50', textAlign: 'center' }}>Редагування</h2>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Назва:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Адреса:</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Рейтинг (0 - 5):</label>
            <input 
              type="number" 
              step="0.1" 
              min="0" 
              max="5" 
              name="rating" 
              value={formData.rating} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Тип кухні:</label>
            <input 
              type="text" 
              name="cuisineType" 
              value={formData.cuisineType} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>URL зображення:</label>
            <input 
              type="text" 
              name="imageUrl" 
              value={formData.imageUrl} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button 
              type="submit" 
              style={{ flex: 1, padding: '10px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Зберегти
            </button>
            <button 
              type="button" 
              onClick={handleCancel}
              style={{ flex: 1, padding: '10px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Скасувати
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditableRestaurantApp;