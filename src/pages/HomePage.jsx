// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const baseUrl = import.meta.env.BASE_URL || '';

  return (
    <div className="home-container" style={styles.container}>
      <div className="birthday-section" style={{
        ...styles.birthdaySection,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease'
      }}>
        <div className="photo-frame" style={styles.photoFrame}>
          <img 
            src={`${baseUrl}images/photo_2025-06-17_00-31-29.jpg`}
            alt="Именинник"
            className="photo"
            style={styles.photo}
          />
          <div className="photo-glow" style={styles.photoGlow}></div>
        </div>

        <div className="birthday-content" style={styles.birthdayContent}>
          <h1 className="birthday-title" style={styles.birthdayTitle}>
            С Днём Рождения, Андросова Алина Алексеевна! 🎉
          </h1>
          
          <p className="birthday-message" style={styles.birthdayMessage}>
            В этот особенный день хочется пожелать тебе<br />
            <span className="highlight" style={styles.highlight}>счастья, здоровья и вдохновения</span><br />
            Пусть каждый день приносит радость, а мечты обязательно сбываются!
            Этот сайт - маленький подарок, созданный с любовью и теплом, чтобы сделать твой день ещё ярче. 
            Наслаждайся каждым моментом и помни, что ты невероятная! 💖
          </p>

          <div className="wish-list" style={styles.wishList}>
            <div className="wish-item" style={styles.wishItem}>
              <span className="wish-emoji" style={styles.wishEmoji}>✨</span>
              <span>Творческих успехов</span>
            </div>
            <div className="wish-item" style={styles.wishItem}>
              <span className="wish-emoji" style={styles.wishEmoji}>🌟</span>
              <span>Ярких впечатлений</span>
            </div>
            <div className="wish-item" style={styles.wishItem}>
              <span className="wish-emoji" style={styles.wishEmoji}>💫</span>
              <span>Исполнения желаний</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    minHeight: '100vh',
    padding: '20px',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
    boxSizing: 'border-box'
  },

  birthdaySection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    margin: '2rem 0 4rem 0', // Изменено: убрал auto
    width: '100%', // Добавлено
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box' // Добавлено
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

// Добавляем глобальные анимации и медиазапрос (ОДИН БЛОК!)
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

  @media (max-width: 768px) {
  .birthday-section {
    flex-direction: column !important;
    gap: 2rem !important;
    margin: 1rem 0 2rem 0 !important;
    padding: 1.5rem !important;
    width: 100% !important;
    border-radius: 20px !important;
    box-sizing: border-box !important;
  }
  
  .photo-frame {
    width: 250px !important;
    height: 250px !important;
    margin-top: 1rem !important;
  }
  
  .birthday-content {
    text-align: center !important;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 10px !important;
    box-sizing: border-box !important;
  }
  
  .birthday-title {
    font-size: 2rem !important;
    word-wrap: break-word !important;
    max-width: 100% !important;
  }
  
  .birthday-message {
    font-size: 1rem !important;
    line-height: 1.5 !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    max-width: 100% !important;
    padding: 0 5px !important;
    box-sizing: border-box !important;
  }
  
  .highlight {
    font-size: 1.2rem !important;
    word-wrap: break-word !important;
    max-width: 100% !important;
    white-space: normal !important;
  }
  
  .wish-list {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 0.5rem !important;
    width: 100% !important;
    padding: 0 5px !important;
    box-sizing: border-box !important;
  }
  
  .wish-item {
    padding: 0.8rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  
  .wish-item span {
    word-wrap: break-word !important;
    font-size: 0.9rem !important;
  }
  
  .wish-emoji {
    font-size: 1.5rem !important;
  }
  
  .cards {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 1rem !important;
    width: 100% !important;
    padding: 0 10px !important;
    box-sizing: border-box !important;
    justify-content: center !important;
  }
  
  .card {
    width: 180px !important;
    padding: 1rem !important;
    box-sizing: border-box !important;
    margin: 0.5rem !important;
  }
  
  .card-title {
    word-wrap: break-word !important;
    font-size: 1rem !important;
  }
  
  .card-text {
    word-wrap: break-word !important;
    font-size: 0.8rem !important;
  }
  
  .music-button {
    margin-top: 0.5rem !important;
    padding: 0.8rem 1.5rem !important;
    font-size: 1rem !important;
    max-width: 90% !important;
    white-space: normal !important;
    word-wrap: break-word !important;
    display: inline-block !important;
  }
}

@media (max-width: 480px) {
  .cards {
    gap: 0.5rem !important;
  }
  
  .card {
    width: 150px !important;
    padding: 0.8rem !important;
    margin: 0.3rem !important;
  }
  
  .wish-list {
    gap: 0.3rem !important;
  }
  
  .wish-item {
    padding: 0.6rem !important;
  }
  
  .wish-item span {
    font-size: 0.8rem !important;
  }
}

@media (max-width: 360px) {
  .cards {
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .card {
    width: 100% !important;
    max-width: 250px !important;
  }
  
  .wish-list {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 380px) {
  .cards {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
  }
  
  .card {
    width: 90% !important;
    max-width: 280px !important;
    margin: 0.5rem auto !important; /* auto по бокам для центрирования */
    padding: 1rem !important;
    box-sizing: border-box !important;
    text-align: center !important;
  }
  
  .birthday-section {
    padding: 1rem !important;
    margin: 1rem auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  
  .birthday-content {
    padding: 0 !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .wish-list {
    display: grid !important;
    grid-template-columns: 1fr !important; /* Одна колонка */
    gap: 0.5rem !important;
    width: 100% !important;
    max-width: 280px !important;
    margin: 0 auto !important; /* Центрируем */
  }
  
  .wish-item {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 0.8rem !important;
    box-sizing: border-box !important;
  }
  
  .photo-frame {
    margin: 0 auto !important; /* Центрируем фото */
  }
}
`;
document.head.appendChild(style);

export default HomePage;