import React, { useState } from 'react';

interface LoginFormProps {
  onLoginSubmit?: (login: string, pass: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSubmit }) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLoginSubmit) {
      onLoginSubmit(login, password);
    }
    alert(`Успішно надіслано!\nЛогін: ${login}\nПароль: ${password}`);
  };

  return (
    <div style={{ 
      padding: '25px', 
      maxWidth: '350px', 
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif', 
      background: '#ffffff', 
      borderRadius: '10px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: 0, textAlign: 'center' }}>Авторизація</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Логін:</label>
          <input 
            type="text" 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
            placeholder="Введіть логін..."
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Пароль:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Введіть пароль..."
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            background: '#27ae60', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Увійти
        </button>
      </form>
      <div style={{ marginTop: '20px', padding: '12px', background: '#f8f9fa', borderRadius: '5px', border: '1px solid #e9ecef' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#555' }}>Динамічний перегляд даних:</h4>
        <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Логін:</strong> {login || <span style={{ color: '#999' }}>пусто</span>}</p>
        <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Пароль:</strong> {password ? '•'.repeat(password.length) : <span style={{ color: '#999' }}>пусто</span>}</p>
      </div>
    </div>
  );
};

export default LoginForm;