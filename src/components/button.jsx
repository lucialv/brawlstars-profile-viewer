import React, { useState } from "react";

const Button = ({ nombre }) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <button
      className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md text-blue-600 transition-colors w-full sm:w-auto"
      onClick={incrementCounter}
    >
      {nombre} {count}
    </button>
  );
};

export default Button;
