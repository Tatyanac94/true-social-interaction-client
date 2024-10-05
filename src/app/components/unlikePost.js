'use client'; // This is required to use hooks in components
import axios from 'axios';

const UnlikePost = ({ likeId }) => {
  const handleUnlike = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/likes/${likeId}`);
      // Optionally refresh the like count or show a success message
    } catch (error) {
      console.error('Error unliking post:', error);
    }
  };

  return <button onClick={handleUnlike}>Unlike</button>;
};

export default UnlikePost;
