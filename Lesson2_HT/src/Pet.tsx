import React from 'react';

interface PetInfoProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  favoriteFood: string;
  habit: string;
  photoUrl: string;
}

const PetDetails: React.FC<PetInfoProps> = ({ name, species, breed, age, favoriteFood, habit, photoUrl }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', maxWidth: '450px', margin: '0 auto' }}>
    <img 
      src={photoUrl} 
      alt={name} 
      style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
    />
    <h2 style={{ color: '#e67e22', margin: '0 0 10px 0' }}>{name} ({species})</h2>
    <div style={{ width: '100%', textAlign: 'left', lineHeight: '1.8', color: '#444' }}>
      <p style={{ margin: '4px 0' }}><strong>Порода:</strong> {breed}</p>
      <p style={{ margin: '4px 0' }}><strong>Вік:</strong> {age} роки (-ів)</p>
      <p style={{ margin: '4px 0' }}><strong>Улюблена їжа:</strong> {favoriteFood}</p>
      <p style={{ margin: '4px 0' }}><strong>Головна звичка:</strong> {habit}</p>
    </div>
  </div>
);

export const PetApp: React.FC = () => {
  const myPet = {
    name: "Кіт Барсик",
    species: "Кіт",
    breed: "Шотландський висловухий (Scottish Fold)",
    age: 3,
    favoriteFood: "Лососеві павучі та куряче філе",
    habit: "Спати на клавіатурі під час роботи та зустрічати біля дверей.",
    photoUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Мій домашній улюбленець</h1>
      <PetDetails 
        name={myPet.name}
        species={myPet.species}
        breed={myPet.breed}
        age={myPet.age}
        favoriteFood={myPet.favoriteFood}
        habit={myPet.habit}
        photoUrl={myPet.photoUrl}
      />
    </div>
  );
};

export default PetApp;