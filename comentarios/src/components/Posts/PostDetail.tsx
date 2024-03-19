import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Post Detail</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostDetail;
