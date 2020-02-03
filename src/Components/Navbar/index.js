import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/logo.jpg`}
        alt="logo"
      />
    </nav>
  );
};

export { Navbar };
