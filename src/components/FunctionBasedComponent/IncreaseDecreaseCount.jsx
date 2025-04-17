import React, { useState } from "react";
import Button from "../Button/Button";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    return setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <h2>Question 3:Function Based use of useState Hook</h2>
        <h4 className="all">Count: {count}</h4>
        <div className="button-container">
          <Button
            className="counter-button"
            onClick={increment}
            title="Increase"
          />
          <Button
            className="counter-button"
            onClick={decrement}
            title="Decrease"
          />
          <Button className="counter-button" onClick={reset} title="Reset" />
        </div>
      </div>
    </>
  );
}

export default IncreaseDecreaseCount;
