import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  // Otros campos de la foto
}

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div>
      <h2>Galería de Fotos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ width: '200px', margin: '10px' }}>
            <img src={photo.url} alt={photo.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
