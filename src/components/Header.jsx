import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container flex justify-between items-center" style={{ height: '80px' }}>
        <div className="logo font-bold text-sm uppercase" style={{ letterSpacing: '0.1em' }}>
          Logo
        </div>
        <nav className="nav">
          <ul className="flex gap-4 text-xs font-bold text-gray uppercase">
            <li><a href="#" style={{ color: 'var(--color-text-primary)' }}>Home</a></li>
            <li><a href="#">Discovery</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="user-profile">
          <img 
            src="https://placehold.co/40x40" 
            alt="User" 
            style={{ borderRadius: '50%', width: '30px', height: '30px', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
