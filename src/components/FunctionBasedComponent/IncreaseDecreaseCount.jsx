import React, { useState } from "react";
import Button from "../Button/Button";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0); // Changed name to avoid conflict

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    clearInterval(intervalId); // Stop any running interval
    setIntervalId(0);
  };
  // Removed unnecessary export statement

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    clearInterval(intervalId);
    setIntervalId(0);
  };
  //  ! Added by myself for trial  and to add additional features
  const autoIncrement = () => {
    clearInterval(intervalId); // Clear any existing interval before setting a new one
    const newInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId(newInterval);
  };

  const reset = () => {
    setCount(0);
    clearInterval(intervalId);
    setIntervalId(0);
  };
  // Dynamic button data
  const ButtonData = [
    { attachedFunction: increment, title: "Increase", className: "counter_button" },
    { attachedFunction: decrement, title: "Decrease", className: "counter_button" },
    {
      attachedFunction: autoIncrement,
      title: "Auto-Increment",
      className: "counter_button addition",
    },
    { attachedFunction: reset, title: "Reset", className: "counter_button" },
  ];

  return (
    <>
      <div className="counter-container">
        <h2>Question 3:Function Based use of useState Hook</h2>
        <h4 className="all">Count: {count}</h4>
        <div className="button-container">
          {ButtonData.map(({ attachedFunction, title,className }, index) => (
            <Button
              key={index}
              className={className}
              onClick={attachedFunction}
              title={title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default IncreaseDecreaseCount;
