import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentLikes from './commentLikes'; // Import the LikeComment component

const Comments = ({ postId, existingComments }) => {
  const [comments, setComments] = useState(existingComments || []);
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);

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
      setShowNameInput(false);
    } catch (error) {
      console.error('Error creating comment:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    setComments(existingComments || []);
  }, [existingComments]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setShowComments(prev => !prev)} 
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          {showComments ? 'Hide Comments' : `Show Comments (${comments.length})`}
        </button>
        <button 
          onClick={() => setShowNameInput(prev => !prev)} 
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Add a Comment
        </button>
      </div>

      {showNameInput && (
        <form onSubmit={handleCommentSubmit} className="flex items-center mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name (optional)"
            className="w-1/3 mb-2 p-2 border rounded"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            required
            className="w-1/3 h-24 mb-2 p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
            Submit Comment
          </button>
        </form>
      )}

      {showComments && (
        <div>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="flex justify-between items-center mb-2">
                  <div>
                    <strong>{comment.username || 'Anonymous'}:</strong> {comment.content}
                    <p className="text-sm text-gray-500">Commented on: {formatDate(comment.timestamp)}</p>
                  </div>
                  <CommentLikes commentId={comment.id} existingLikes={comment.likes || []} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No Comments</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
