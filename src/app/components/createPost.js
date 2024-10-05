'use client'; 
import { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { 
        content, 
        username: username || '', 
        timestamp: new Date().toISOString()
      });
      onPostCreated(response.data);
      setContent('');
      setUsername('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
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
        placeholder="Write your post..."
        required
        className="w-full h-32 p-2 border rounded"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
