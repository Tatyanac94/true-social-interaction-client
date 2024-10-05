'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = ({ postId, existingComments }) => {
  const [comments, setComments] = useState(existingComments || []);
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const formatDate = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleString(); 
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/comments/posts/${postId}/comments`, { content, username });

      const newComment = {
        id: Date.now(),
        username: username || 'Anonymous',
        content,
        timestamp: new Date().toISOString(), 
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setContent(''); 
      setUsername(''); 
    } catch (error) {
      console.error('Error creating comment:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    setComments(existingComments || []);
  }, [existingComments]);

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name (optional)"
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
          required
          className="w-full h-30 p-2 border rounded" 
        />
        <button type="submit">Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.username || 'Anonymous'}:</strong> {comment.content}
            <p className="text-sm text-gray-500">Commented on: {formatDate(comment.timestamp)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
