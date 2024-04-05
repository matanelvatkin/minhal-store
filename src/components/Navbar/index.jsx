import React from "react";

export default function Navbar({ buttonsList, setChose }) {
  return (
    <div>
        <button onClick={() => setChose("all")} key={"all"}>
          All
        </button>
        {buttonsList.map((bl) => (
          <button
            onClick={() => {
              setChose(bl);
            }}
          >
            {bl}
          </button>
        ))}
    </div>
  );
}
