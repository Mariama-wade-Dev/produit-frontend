import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs font-medium text-gray-600">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500"
      />
    </div>
  );
};

export default Input;