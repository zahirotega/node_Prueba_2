import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

const PhotoDetail: React.FC = () => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const { photoId } = useParams<{ photoId: string }>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then(response => response.json())
      .then(data => setPhoto(data));
  }, [photoId]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Photo Detail</h2>
      <img src={photo.url} alt={photo.title} style={{ maxWidth: '500px' }} />
      <p>Title: {photo.title}</p>
    </div>
  );
};

export default PhotoDetail;
