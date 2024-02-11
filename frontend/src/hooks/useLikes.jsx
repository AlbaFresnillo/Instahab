import React, { useState } from 'react';

const useLikes = (reelId, initialLikes, authToken) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    try {
      console.log('authToken:', authToken);
      const response = await fetch(`/reel/${reelId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          value: 1,
        }),
      });

      if (response.ok) {
        const newLikes = likes + 1;
        setLikes(newLikes);
        return newLikes;
      } else {
        console.error('Error al dar like:', response.statusText);
      }
    } catch (error) {
      console.error('Error al dar like:', error.message);
    }
  };

  return { likes, handleLike };
};

export default useLikes;
