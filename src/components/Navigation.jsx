// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: isActive ? '600' : '400',
    padding: '0.5rem 1.2rem',
    borderRadius: '20px',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
    backdropFilter: isActive ? 'blur(5px)' : 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    whiteSpace: 'nowrap' // Запрещаем перенос текста
  });

  return (
    <div style={styles.wrapper}>
      <nav style={styles.nav}>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <NavLink to="/" style={getActiveStyle}>
              Home
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/vabe" style={getActiveStyle}>
              Вайб
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/baby" style={getActiveStyle}>
              Детство
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/jobik" style={getActiveStyle}>
              Работа
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/music" style={getActiveStyle}>
              🎵
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 1rem 0 1rem', // Уменьшил отступы
    width: '100%', // Изменено с fit-content на 100%
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.6rem 1rem', // Уменьшил padding
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(15px) saturate(180%)',
    borderRadius: '50px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    width: 'auto', // Автоматическая ширина
    maxWidth: '90%', // Ограничиваем ширину на мобильных
    minWidth: '300px', // Минимальная ширина
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '0.3rem', // Уменьшил gap
    alignItems: 'center',
    flexWrap: 'wrap', // Разрешаем перенос на новую строку
    justifyContent: 'center'
  },
  navItem: {
    margin: 0
  }
};

// Добавляем медиазапрос для мобильных устройств
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 600px) {
    .nav-item a {
      font-size: 0.9rem !important;
      padding: 0.4rem 0.8rem !important;
    }
  }
  
  @media (max-width: 480px) {
    nav {
      padding: 0.5rem !important;
    }
    
    .nav-links {
      gap: 0.2rem !important;
    }
    
    .nav-item a {
      font-size: 0.8rem !important;
      padding: 0.3rem 0.6rem !important;
    }
  }
`;
document.head.appendChild(style);

export default Navigation;