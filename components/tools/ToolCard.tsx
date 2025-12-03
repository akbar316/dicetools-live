
import React from 'react';

const ToolCard = ({ name, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ToolCard;
