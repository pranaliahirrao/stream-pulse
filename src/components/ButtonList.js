import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "JavaScript", "DSA", "Music", "Live", "Algorithms", "Sports"];

  return (
    <div className="button-list-container overflow-x-scroll scrollbar-hide px-2">
    <div className="flex">
      {list.map((itemName, index) => (
        <Button key={index} name={itemName} />
      ))}
    </div>
    </div>
  );
};

export default ButtonList;
