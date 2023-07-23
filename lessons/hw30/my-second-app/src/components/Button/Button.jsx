import React from "react";

export default function Button({ children, smileWithVoteNine }) {
  return (
    <p>
      <button
        className="Count-Button"
        onClick={() => {
          console.log(smileWithVoteNine);
        }}
      >
        {children}
      </button>
    </p>
  );
}
