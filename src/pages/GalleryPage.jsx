// src/pages/GalleryPage.jsx
import { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Базовый URL для GitHub Pages
  const baseUrl = import.meta.env.BASE_URL || '';

  const images = [
    {
      id: 1,
      src: `${baseUrl}images/photo_2022-06-19_00-30-14.jpg`,
      alt: 'Фото 2022'
    },
    {
      id: 2,
      src: `${baseUrl}images/photo_2023-12-26_02-13-30.jpg`,
      alt: 'Фото 2023'
    },
    {
      id: 3,
      src: `${baseUrl}images/photo_2024-06-30_00-27-41.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 4,
      src: `${baseUrl}images/photo_2024-10-14_15-23-29.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 5,
      src: `${baseUrl}images/photo_2024-11-09_19-51-26.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 6,
      src: `${baseUrl}images/photo_2024-12-23_08-56-54.jpg`,
      alt: 'Фото 2024'
    },
    {
      id: 7,
      src: `${baseUrl}images/photo_2025-01-27_03-49-53.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 8,
      src: `${baseUrl}images/photo_2025-02-07_20-43-55 (2).jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 9,
      src: `${baseUrl}images/photo_2025-02-07_20-43-55.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 10,
      src: `${baseUrl}images/photo_2025-02-16_17-13-18.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 11,
      src: `${baseUrl}images/photo_2025-03-02_02-53-19.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 12,
      src: `${baseUrl}images/photo_2025-03-03_01-28-57.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 13,
      src: `${baseUrl}images/photo_2025-03-10_12-24-38.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 14,
      src: `${baseUrl}images/photo_2025-03-17_08-38-28.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 15,
      src: `${baseUrl}images/photo_2025-03-19_19-55-59.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 16,
      src: `${baseUrl}images/photo_2025-04-21_18-36-12.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 17,
      src: `${baseUrl}images/photo_2025-06-17_00-31-29.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 18,
      src: `${baseUrl}images/photo_2025-08-20_14-09-25.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 19,
      src: `${baseUrl}images/photo_2025-08-24_07-00-51.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 20,
      src: `${baseUrl}images/photo_2025-08-24_23-54-24.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 21,
      src: `${baseUrl}images/photo_2025-08-28_17-03-13.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 22,
      src: `${baseUrl}images/photo_2025-09-15_01-12-00.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 23,
      src: `${baseUrl}images/photo_2024-12-23_09-07-47.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 24,
      src: `${baseUrl}images/photo_2025-09-21_20-46-10.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 25,
      src: `${baseUrl}images/photo_2025-10-20_20-29-37.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 26,
      src: `${baseUrl}images/photo_2025-11-15_20-21-24.jpg`,
      alt: 'Фото 2025'
    },
    {
      id: 27,
      src: `${baseUrl}images/photo_2026-01-03_14-16-41.jpg`,
      alt: 'Фото 2026'
    }
  ];

  return (
    <div className="gallery-page">
      <main className="gallery-grid">
        {images.map(image => (
          <figure 
            key={image.id} 
            className="gallery-grid__item"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-grid__image"
            />
          </figure>
        ))}
      </main>

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div 
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Large view"
            className="gallery-modal__image"
          />
          <button 
            className="gallery-modal__close"
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

export default GalleryPage;