// src/pages/GalleryPage.jsx
import { useState } from 'react';
import './GalleryPage.css'; // создадим отдельный CSS файл

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-canyon.webp',
      alt: 'Каньон'
    },
    {
      id: 2,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-field.webp',
      alt: 'Поле'
    },
    {
      id: 3,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-lake.webp',
      alt: 'Озеро'
    },
    {
      id: 4,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-forest.webp',
      alt: 'Лес'
    },
    {
      id: 5,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-lightning.webp',
      alt: 'Молния'
    },
    {
      id: 6,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-river.webp',
      alt: 'Река'
    },
    {
      id: 7,
      src: 'https://code.s3.yandex.net/web-developer/verstka/sandbox/gallery-sky.webp',
      alt: 'Небо'
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
            alt="Large"
            className="gallery-modal__image"
          />
          <button 
            className="gallery-modal__close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;