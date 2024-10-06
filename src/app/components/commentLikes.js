'use client';

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const CommentLikes = ({ commentId }) => {
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const fetchLikes = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/likes/comments/${commentId}/likes`);
      setLikes(response.data);

      const username = localStorage.getItem('username');
      if (username) {
        setIsLiked(response.data.some(like => like.username === username));
      }
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  }, [commentId]);

  const handleLike = async (e) => {
    e.preventDefault();
    const username = prompt("Enter your name (optional):");

    if (username === null) {
      return;
    }

    const finalUsername = username.trim() === '' ? 'Anonymous' : username;

    localStorage.setItem('username', finalUsername);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/likes/comments/${commentId}/likes`, { username: finalUsername });
      setLikes((prevLikes) => [...prevLikes, { username: finalUsername }]);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking comment:', error);
      if (error.response && error.response.status === 400) {
        alert("You have already liked this comment.");
      } else {
        alert("An error occurred while liking the comment.");
      }
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleLike}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className="likes-button"
      >
        Likes: {likes.length} {isLiked ? '👍' : ''}
      </button>

      {tooltipVisible && likes.length > 0 && (
        <div className="tooltip">
          <ul>
            {likes.map((like, index) => (
              <li key={index}>{like.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentLikes;
