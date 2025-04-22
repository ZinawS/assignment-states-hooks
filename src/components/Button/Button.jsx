import React from "react";
import "../styles.css";

function Button({ className, onClick, title }) {
  return (
    <>
      <button
        className={className}
        style={className.includes("addition") ? { background: "red" } : {}}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
