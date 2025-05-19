import React from 'react'
import { useState } from 'react';


const calculator = () => {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // Simple eval for basic operations
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
     <div className="max-w-xs mx-auto mt-10 p-4 bg-gray-100 rounded-xl shadow-lg">
      <div className="mb-2 text-right text-lg bg-white p-2 rounded">
        <div className="text-gray-700">{input || '0'}</div>
        {result !== '' && <div className="text-blue-500 font-bold">{result}</div>}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
            onClick={() =>
              btn === '=' ? handleCalculate() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button
          className="col-span-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default calculator