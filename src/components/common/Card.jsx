import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;