import React from 'react';

interface ProfileHeaderProps {
  name: string;
  city: string;
  phone: string;
  email: string;
  photoUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, city, phone, email, photoUrl }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '2px solid #3498db', paddingBottom: '20px', marginBottom: '20px' }}>
    <img src={photoUrl} alt={name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
    <div>
      <h1 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{name}</h1>
      <p style={{ margin: '4px 0', color: '#555' }}>📍 Місто: {city}</p>
      <p style={{ margin: '4px 0', color: '#555' }}>📞 Телефон: {phone}</p>
      <p style={{ margin: '4px 0', color: '#555' }}>📧 Email: {email}</p>
    </div>
  </div>
);

interface SectionProps {
  title: string;
  items: string[];
}

const InfoSection: React.FC<SectionProps> = ({ title, items }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ color: '#2980b9' }}>{title}</h3>
    <ul style={{ paddingLeft: '20px', color: '#34495e' }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
      ))}
    </ul>
  </div>
);

export const PersonalPageApp: React.FC = () => {
  const profile = {
    name: "Олександра Петренко",
    city: "Вінниця, Україна",
    phone: "+38 (067) 123-45-67",
    email: "alexandra.petrenko@example.com",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    experience: [
      "Frontend Developer у TechCorp (2022 – по т.д.) — розробка SPA на React та TypeScript.",
      "Junior Web Developer у WebStudio (2020 – 2022) — створення адаптивних сайтів на HTML/CSS/JS."
    ],
    skills: ["React / TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3 / SCSS", "Git / GitHub", "REST API / Redux Toolkit"]
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', maxWidth: '650px', margin: '0 auto', background: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <ProfileHeader 
        name={profile.name}
        city={profile.city}
        phone={profile.phone}
        email={profile.email}
        photoUrl={profile.photoUrl}
      />
      <InfoSection title="Досвід роботи" items={profile.experience} />
      <InfoSection title="Професійні навички" items={profile.skills} />
    </div>
  );
};

export default PersonalPageApp;