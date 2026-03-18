// src/pages/GalleryPage2.jsx
import { useState } from 'react';
import './GalleryPage2.css';

const GalleryPage2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
  {
    id: 1,
    src: '/baby/photo_2024-11-05_23-45-29.jpg',
    alt: 'Фото 2024'
  },
  {
    id: 2,
    src: '/baby/photo_2024-12-01_21-55-18.jpg',
    alt: 'Фото 2024'
  },
  {
    id: 3,
    src: '/baby/photo_2024-12-01_22-00-00.jpg',
    alt: 'Фото 2024'
  },
  {
    id: 4,
    src: '/baby/photo_2025-03-05_10-51-10.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 5,
    src: '/baby/photo_2025-03-05_10-52-33.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 6,
    src: '/baby/photo_2025-03-05_11-07-40 (2).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 7,
    src: '/baby/photo_2025-03-05_11-07-40.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 8,
    src: '/baby/photo_2025-03-05_11-07-41 (2).jpg',
    alt: 'Фото 2025'
  },
 
  {
    id: 10,
    src: '/baby/photo_2025-03-05_11-07-42 (2).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 11,
    src: '/baby/photo_2025-03-05_11-07-42.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 12,
    src: '/baby/photo_2025-03-05_11-07-43 (2).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 13,
    src: '/baby/photo_2025-03-05_11-07-43 (3).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 14,
    src: '/baby/photo_2025-03-05_11-07-43.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 15,
    src: '/baby/photo_2025-03-05_11-07-44 (2).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 16,
    src: '/baby/photo_2025-03-05_11-07-44.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 17,
    src: '/baby/photo_2025-03-05_11-07-45 (2).jpg',
    alt: 'Фото 2025'
  },
  {
    id: 18,
    src: '/baby/photo_2025-03-05_11-07-45.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 19,
    src: '/baby/photo_2025-03-29_21-28-58.jpg',
    alt: 'Фото 2025'
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
            alt="Large"
            className="gallery2-modal__image"
          />
          <button 
            className="gallery2-modal__close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage2;