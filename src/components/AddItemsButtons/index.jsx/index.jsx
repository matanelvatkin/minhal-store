import React from "react";
import "../style.css"

export default function AddItemsButtons({
  onClick = () => {},
  numberText = 0,
}) {
  return (
    <div className="buttons">
      <button
        onClick={() => {
          onClick(numberText + 1);
        }}
      >
        +
      </button>
      {numberText}
      <button
        onClick={() => {
          onClick(numberText - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
