import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  useEffect(()=>{
    alert("Component is mounted")
  },[])
  return (
    <>
      <div className="counter-container">
        <h2>Question 4:Function Based use of useEffect Hook</h2>

        <div className="button-container">
          <Button
            className="counter-button"
            onClick={increment}
            title="Increase"
          />
        </div>
        <h4 className="all">Count: {count}</h4>
      </div>
    </>
  );
}

export default UseEffectForTitle;
