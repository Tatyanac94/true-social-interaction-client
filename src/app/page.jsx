'use client';

import React, { useEffect, useState } from 'react';
import CreatePost from '../app/components/createPost';
import ThemeToggle from '../app/components/themeToggle';
import Comments from '../app/components/comments';
import axios from 'axios';
import Likes from '../app/components/likes';
import { useTheme } from '../app/themeContext'; 

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { theme } = useTheme(); 

  const fetchPosts = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <ThemeToggle />
      <h1 className="text-2xl font-bold text-blue-500 underline mb-4">Posts</h1>
      <CreatePost onPostCreated={fetchPosts} />
      {loading ? (
        <p className="text-center text-blue-500">Loading posts...</p>
      ) : (
        <ul className="w-full max-w-2xl mt-4 mx-auto">
          {posts.map((post) => (
            <li 
              key={post.id} 
              className={`bg-white shadow-lg rounded-lg p-4 mb-4 relative ${theme === 'dark' ? 'shadow-dark' : 'shadow-blue-500'}`} 
            >
              <h2 className="text-lg font-bold">{post.content}</h2>
              <p>By: {post.username}</p>
              <Likes postId={post.id} existingLikes={post.likes || []} />
              <p className="text-sm text-gray-500">Posted on: {new Date(post.timestamp).toLocaleString()}</p>
              <Comments postId={post.id} existingComments={post.comments || []} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;