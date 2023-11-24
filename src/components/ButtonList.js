import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "JavaScript", "DSA", "Music", "Live", "Algorithms", "Sports"];

  return (
    <div className="flex ">
      {list.map((itemName, index) => (
        <Button key={index} name={itemName} />
      ))}
    </div>
  );
};

export default ButtonList;
