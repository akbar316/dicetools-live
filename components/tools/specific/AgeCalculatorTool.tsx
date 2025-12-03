import React, { useState } from 'react';

const AgeCalculatorTool = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (birthDate) {
      const today = new Date();
      const birthDateObj = new Date(birthDate);
      let years = today.getFullYear() - birthDateObj.getFullYear();
      const m = today.getMonth() - birthDateObj.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        years--;
      }
      setAge(`${years} years old`);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Age Calculator</h2>
      <div className="flex flex-col space-y-4">
        <input
          type="date"
          className="p-2 border rounded"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {age && (
          <div className="mt-4 p-2 bg-green-100 rounded">
            <p className="font-bold">Your age is:</p>
            <p>{age}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculatorTool;