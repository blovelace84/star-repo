import React, { useRef, useEffect } from 'react';

const Star = ({ id, position, onDestroy }) => {
  const starRef = useRef(null);

  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);

  if(!position) return null; 

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={() => onDestroy(id)}
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'yellow',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 0 5px rgba(255, 255, 0, 0.8)',
        transition: 'box-shadow 0.2s',
      }}
      onFocus={() => {
        if (starRef.current) {
          starRef.current.style.boxShadow = '0 0 15px rgba(255, 255, 0, 1)';
        }
      }}
      onBlur={() => {
        if (starRef.current) {
          starRef.current.style.boxShadow = '0 0 5px rgba(255, 255, 0, 0.8)';
        }
      }}
    />
  );
};

export default Star;
