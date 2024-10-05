'use client';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import EditPost from '../components/editPost';
import DeletePost from '../components/deletePost';
import LikePost from '../components/likes';
import UnlikePost from '../components/unlikePost';
import LikeCount from '../components/likeCount';

const PostDetail = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState([]);

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
      setPost(response.data.post);
      setLikes(response.data.likes || []); // Assuming you're fetching likes with the post
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }, [id]); // Dependency on id

  useEffect(() => {
    fetchPost();
  }, [fetchPost]); // Dependency on fetchPost

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.content}</h2>
      <EditPost post={post} />
      <DeletePost postId={post.id} />
      <LikeCount postId={post.id} />
      <LikePost postId={post.id} />
      {likes.map(like => (
        <UnlikePost key={like.id} likeId={like.id} />
      ))}
    </div>
  );
};

export default PostDetail;
