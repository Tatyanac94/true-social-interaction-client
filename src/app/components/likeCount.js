import { useEffect, useState, useCallback } from 'react'; 
import axios from 'axios';

const LikeCount = ({ postId }) => {
  const [likeCount, setLikeCount] = useState(0);

  const fetchLikes = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/likes/posts/${postId}/likes`);
      setLikeCount(response.data.length);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  }, [postId]);

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  return <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>;
};

export default LikeCount;
