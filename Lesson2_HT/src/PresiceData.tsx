import React, { useState, useEffect } from 'react';

interface ClockDisplayProps {
  currentTime: string;
}

const ClockDisplay: React.FC<ClockDisplayProps> = ({ currentTime }) => (
  <div style={{ textAlign: 'center', background: '#2c3e50', color: '#ecf0f1', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
    <h2 style={{ margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 400 }}>Поточний час</h2>
    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '2px', color: '#1abc9c' }}>
      {currentTime}
    </div>
  </div>
);

export const ClockApp: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <ClockDisplay currentTime={time} />
    </div>
  );
};

export default ClockApp;