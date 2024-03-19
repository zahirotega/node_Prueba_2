import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

const PhotosList: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Fotos</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosList;
