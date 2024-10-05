'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Likes = ({ postId }) => {
  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/likes`);
      setLikes(response.data);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/likes`);
      fetchLikes(); // Refresh likes
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleUnlike = async (likeId) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/likes/${likeId}`);
      fetchLikes(); // Refresh likes
    } catch (error) {
      console.error('Error unliking post:', error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [postId]);

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <ul>
        {likes.map((like) => (
          <li key={like.id}>
            Like <button onClick={() => handleUnlike(like.id)}>Unlike</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Likes;
