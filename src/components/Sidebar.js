import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // need to subscribe to specific part of the store : useSelector
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early Return Pattern 
  // if its false it wont go to below part of code  |  you can use Ternary operator here 
  if(!isMenuOpen) return null ;     

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
