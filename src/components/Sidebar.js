import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // need to subscribe to specific part of the store : useSelector
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early Return Pattern 
  // if its false it wont go to below part of code  |  you can use Ternary operator here 
  if(!isMenuOpen) return null ;     

  return (
    <div className="px-5 w-1/12 text-xl">
      <ul>
        <li className="py-4"><Link to="/">Home</Link></li>
        <li className="py-4">Shorts</li>
        <li className="py-4">Videos</li>
        <li className="py-4">Live</li>
      </ul>
      <hr/>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li className="py-4">Music</li>
        <li className="py-4">Sports</li>
        <li className="py-4">Gaming</li>
        <li className="py-4">Movies</li>
      </ul>
      <hr/>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="py-4">Music</li>
        <li className="py-4">Sports</li>
        <li className="py-4">Gaming</li>
        <li className="py-4">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
