import React from "react";

export default function Button({ children, maxVote }) {
  return (
    <p>
      <button
        className="Count-Button"
        onClick={() => {
          console.log(maxVote);
        }}
      >
        {children}
      </button>
    </p>
  );
}
