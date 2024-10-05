import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const LikeCount = ({ postId }) => {
  const [likeCount, setLikeCount] = useState(0);

  const fetchLikes = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/likes`);
      setLikeCount(response.data.length); // Assuming the response is an array of likes
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  }, [postId]); // Dependency on postId

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]); // Dependency on fetchLikes

  return <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>;
};

export default LikeCount;
