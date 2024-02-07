import React, { useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Heavy Operation : useMemo
  const prime = () => {
    return findPrime(text);
  } 

  return (
    <div
      className={
        "m-4 p-2 border border-black w-96 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-50 border border-green-600 text-red-300 font-bold "
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 p-2 text-red-300 font-bold "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h3 className="font-bold text-2xl pt-2">n-th Prime Number : {prime()}</h3>
      </div>
    </div>
  );
};

export default Demo;
