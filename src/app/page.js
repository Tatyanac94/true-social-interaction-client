'use client';

import React, { useEffect, useState } from 'react';
import CreatePost from '../app/components/createPost';
import ThemeToggle from '../app/components/themeToggle';
import Comments from '../app/components/comments';
import axios from 'axios';
import Likes from '../app/components/likes';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
      <ul className="w-full mt-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-lg rounded-lg p-4 mb-4 relative">
            <h2 className="text-lg">{post.content}</h2>
            <p>By: {post.username}</p>
            <Likes postId={post.id} existingLikes={post.likes || []} />
            <p className="text-sm text-gray-500">Posted on: {new Date(post.timestamp).toLocaleString()}</p>
            <Comments postId={post.id} existingComments={post.comments || []} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
