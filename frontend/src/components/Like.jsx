import React from 'react';
import useLikes from '../hooks/useLikes';

const LikeButton = ({ reelId, initialLikes, authToken }) => {
  const { likes, handleLike } = useLikes(reelId, initialLikes, authToken);

  return (
    <div>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default LikeButton;
