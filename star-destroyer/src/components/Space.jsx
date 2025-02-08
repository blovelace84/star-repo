import React, { useState, useEffect } from 'react';
import Star from './Star';

const STAR_SIZE = 8;

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - STAR_SIZE),
  y: Math.random() * (window.innerHeight - STAR_SIZE),
});

const Space = () => {
  const [stars, setStars] = useState([]);

  // Add a new star at a random position
  const addStar = () => {
    const newStar = {
      id: Date.now() + Math.random(),
      position: getRandomPosition(),
    };
    setStars((prevStars) => [...prevStars, newStar]);
  };

  // Remove a star by its unique ID
  const destroyStar = (id) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  };

  useEffect(() => {
    const starInterval = setInterval(addStar, 2500);

    return () => clearInterval(starInterval);
  }, []);

  return (
    <div className="space">
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          position={star.position}
          onDestroy={destroyStar}
        />
      ))}
    </div>
  );
};

export default Space;
