// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ВАЖНО: используем import.meta.env.BASE_URL
  const baseUrl = import.meta.env.BASE_URL || '';

  return (
    <div style={styles.container}>
      <div style={{
        ...styles.birthdaySection,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease'
      }}>
        <div style={styles.photoFrame}>
          <img 
            src={`${baseUrl}images/photo_2025-06-17_00-31-29.jpg`}
            alt="Именинник"
            style={styles.photo}
          />
          <div style={styles.photoGlow}></div>
        </div>

        {/* Остальной код без изменений */}
        <div style={styles.birthdayContent}>
          <h1 style={styles.birthdayTitle}>
            С Днём Рождения, Андросова Алина Алексеевна! 🎉
          </h1>
          
          <p style={styles.birthdayMessage}>
            В этот особенный день хочется пожелать тебе<br />
            <span style={styles.highlight}>счастья, здоровья и вдохновения</span><br />
            Пусть каждый день приносит радость, а мечты обязательно сбываются!
            Этот сайт - маленький подарок, созданный с любовью и теплом, чтобы сделать твой день ещё ярче. 
            Наслаждайся каждым моментом и помни, что ты невероятная! 💖
          </p>

          <div style={styles.wishList}>
            <div style={styles.wishItem}>
              <span style={styles.wishEmoji}>✨</span>
              <span>Творческих успехов</span>
            </div>
            <div style={styles.wishItem}>
              <span style={styles.wishEmoji}>🌟</span>
              <span>Ярких впечатлений</span>
            </div>
            <div style={styles.wishItem}>
              <span style={styles.wishEmoji}>💫</span>
              <span>Исполнения желаний</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Стили остаются без изменений
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    minHeight: '100vh',
    padding: '20px'
  },

  birthdaySection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    margin: '2rem auto 4rem',
    maxWidth: '1200px',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  },

  photoFrame: {
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(221, 0, 255, 0.3)',
    animation: 'float 6s ease-in-out infinite',
    flexShrink: 0
  },

  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },

  photoGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    boxShadow: 'inset 0 0 50px rgba(221, 0, 255, 0.5)',
    animation: 'pulse 3s ease-in-out infinite',
    pointerEvents: 'none'
  },

  birthdayContent: {
    flex: 1,
    textAlign: 'left'
  },

  birthdayTitle: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #dd00ff, #ffaa00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(221, 0, 255, 0.3)'
  },

  birthdayMessage: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.9)'
  },

  highlight: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ffaa00, #dd00ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    margin: '0.5rem 0'
  },

  wishList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '2rem'
  },

  wishItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(221, 0, 255, 0.3)'
  },

  wishEmoji: {
    fontSize: '2rem'
  },

  galleriesSection: {
    marginBottom: '2rem'
  },

  galleriesTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #dd00ff, #ffaa00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center'
  },

  cards: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '1.5rem',
    width: '200px',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center'
  },

  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem'
  },

  cardText: {
    fontSize: '0.9rem',
    opacity: 0.8,
    lineHeight: '1.4'
  },

  musicButton: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(45deg, #dd00ff, #ffaa00)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center'
  }
};

// Добавляем глобальные анимации
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  a:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
  
  .music-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(221, 0, 255, 0.5);
  }
`;
document.head.appendChild(style);

export default HomePage;