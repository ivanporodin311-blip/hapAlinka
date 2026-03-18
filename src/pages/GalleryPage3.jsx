// src/pages/GalleryPage3.jsx
import { useState } from 'react';
import './GalleryPage3.css';

const GalleryPage3 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
  {
    id: 1,
    src: '/job/photo_2025-02-14_14-21-19.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 2,
    src: '/job/photo_2025-02-21_13-37-38.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 3,
    src: '/job/photo_2025-03-29_21-28-58.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 4,
    src: '/job/photo_2025-03-29_21-29-09.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 5,
    src: '/job/photo_2025-04-18_13-42-35.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 7,
    src: '/job/photo_2025-05-02_11-13-46.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 8,
    src: '/job/photo_2025-09-19_14-35-57.jpg',
    alt: 'Фото 2025'
  },
  {
    id: 6,
    src: '/job/photo_2025-09-19_14-35-59.jpg',
    alt: 'Фото 2025'
  }
];
  return (
    <div className="gallery3-page">
      <main className="gallery3-grid">
        {images.map(image => (
          <figure 
            key={image.id} 
            className="gallery3-grid__item"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery3-grid__image"
            />
          </figure>
        ))}
      </main>

      {selectedImage && (
        <div 
          className="gallery3-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Large"
            className="gallery3-modal__image"
          />
          <button 
            className="gallery3-modal__close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage3;