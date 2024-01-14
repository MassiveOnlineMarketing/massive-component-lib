'use client'

import React, { useState } from 'react';
import '../test-4/CardAnimation.css';


const TestFive = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          onClick={handleButtonClick}
        >
          Click me
        </button>
        <div className={`card ${isClicked ? 'bg-green-500' : ''}`}>
          <h2 className="text-2xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default TestFive