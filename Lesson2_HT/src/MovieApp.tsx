import React from 'react';

interface MoviePosterProps {
  posterUrl: string;
  title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterUrl, title }) => (
  <div style={{ flex: '1', textAlign: 'center' }}>
    <img 
      src={posterUrl} 
      alt={title} 
      style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} 
    />
  </div>
);

interface MovieInfoProps {
  title: string;
  director: string;
  releaseYear: number;
  studio: string;
  genre: string;
  description: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ title, director, releaseYear, studio, genre, description }) => (
  <div style={{ flex: '2' }}>
    <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>{title}</h1>
    <p style={{ fontSize: '1.1rem', color: '#7f8c8d', margin: '5px 0' }}><strong>Режисер:</strong> {director}</p>
    <p style={{ fontSize: '1.1rem', color: '#7f8c8d', margin: '5px 0' }}><strong>Рік випуску:</strong> {releaseYear}</p>
    <p style={{ fontSize: '1.1rem', color: '#7f8c8d', margin: '5px 0' }}><strong>Кіностудія:</strong> {studio}</p>
    <p style={{ fontSize: '1.1rem', color: '#7f8c8d', margin: '5px 0' }}><strong>Жанр:</strong> {genre}</p>
    <p style={{ lineHeight: '1.6', color: '#34495e', marginTop: '15px' }}>{description}</p>
  </div>
);

export const MovieApp: React.FC = () => {
  const movie = {
    title: "Інтерстеллар (Interstellar)",
    director: "Крістофер Нолан",
    releaseYear: 2014,
    studio: "Legendary Pictures, Syncopy, Lynda Obst Productions",
    genre: "Наукова фантастика, Драма",
    description: "Команда дослідників вирушає крізь червоточину в космосі в пошуках нової придатної для життя планети, оскільки ресурси Землі виснажуються.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '800px', margin: '0 auto', background: '#fdfdfd', borderRadius: '10px' }}>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
        <MoviePoster posterUrl={movie.posterUrl} title={movie.title} />
        <MovieInfo 
          title={movie.title}
          director={movie.director}
          releaseYear={movie.releaseYear}
          studio={movie.studio}
          genre={movie.genre}
          description={movie.description}
        />
      </div>
    </div>
  );
};

export default MovieApp;