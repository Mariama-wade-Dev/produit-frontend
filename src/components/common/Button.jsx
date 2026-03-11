import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#555555] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-black transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;