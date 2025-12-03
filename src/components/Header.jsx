import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Logo</div>
        <div className="nav-and-profile">
          <nav className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Discovery</a>
              </li>
              <li>
                <a href="#">Photos</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="user-profile">
            <img
              src="https://placehold.co/40x40/cccccc/cccccc?text=40x40"
              alt="User"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
