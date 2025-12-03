
import React, { useState } from 'react';

const BmiCalculatorTool = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          className="p-2 border rounded"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          className="p-2 border rounded"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={calculateBmi}
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4 p-2 bg-green-100 rounded">
            <p className="font-bold">Your BMI is:</p>
            <p>{bmi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculatorTool;
