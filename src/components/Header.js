import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <img
          alt="menu"
          src="https://i.pinimg.com/474x/0b/53/d7/0b53d7e42184a1823360653f60e7d77b.jpg"
        />
        <img
          className=""
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
      <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
