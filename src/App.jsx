import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "./context/AudioContext";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage"; // Импортируем GalleryPage вместо MorphingPage
import GalleryPage2 from "./pages/GalleryPage2"; // Импортируем вторую галерею
import GalleryPage3 from "./pages/GalleryPage3";
import MusicPage from "./pages/MusicPage";
import Silk from "./components/Silk";

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        {/* Silk фон на весь экран */}
        <div style={styles.background}>
          <Silk
            speed={5}
            scale={1}
            color="#dd00ff"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        
        {/* Контент поверх фона */}
        <div style={styles.content}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vabe" element={<GalleryPage />} /> {/* Заменяем /morphing на /gallery */}
            <Route path="/baby" element={<GalleryPage2 />} /> {/* Новый маршрут */}
            <Route path="/jobik" element={<GalleryPage3 />} /> {/* Новый маршрут */}
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
}

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  content: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',

  }
};

export default App;