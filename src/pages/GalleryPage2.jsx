// src/pages/GalleryPage2.jsx
import { useState } from 'react';
import './GalleryPage2.css';

const GalleryPage2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Базовый URL для GitHub Pages
  const baseUrl = import.meta.env.BASE_URL || '';

  const images = [
    {
      id: 1,
      src: `${baseUrl}baby/photo_2024-11-05_23-45-29.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 2,
      src: `${baseUrl}baby/photo_2024-12-01_21-55-18.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 3,
      src: `${baseUrl}baby/photo_2024-12-01_22-00-00.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 4,
      src: `${baseUrl}baby/photo_2025-03-05_10-51-10.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 5,
      src: `${baseUrl}baby/photo_2025-03-05_10-52-33.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 6,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-40 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 7,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-40.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 8,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-41 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 10,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-42 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 11,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-42.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 12,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-43 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 13,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-43 (3).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 14,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-43.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 15,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-44 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 16,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-44.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 17,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-45 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 18,
      src: `${baseUrl}baby/photo_2025-03-05_11-07-45.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 19,
      src: `${baseUrl}baby/photo_2025-03-29_21-28-58.jpg`,
      alt: 'Фото 2025'
    },
    // Новые фотографии
    {
      id: 20,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-07 (2).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 21,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-07.jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 22,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-08 (2).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 23,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-08 (3).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 24,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-08 (4).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 25,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-08 (5).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 26,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-08 (6).jpg`,
      alt: 'Фото 2026'
    },
    {
      id: 27,
      src: `${baseUrl}baby/photo_2026-03-20_00-06-09.jpg`,
      alt: 'Фото 2026'
    }
];

  return (
    <div className="gallery2-page">
      <main className="gallery2-grid">
        {images.map(image => (
          <figure 
            key={image.id} 
            className="gallery2-grid__item"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery2-grid__image"
            />
          </figure>
        ))}
      </main>

      {selectedImage && (
        <div 
          className="gallery2-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Large view"
            className="gallery2-modal__image"
          />
          <button 
            className="gallery2-modal__close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage2;