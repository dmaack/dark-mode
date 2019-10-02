import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  //destructed statement -- an array or an object
  // const [darkMode, setDarkMode] = useDarkMode();
  const darkmodeVARS = useDarkMode();
  const darkMode = darkmodeVARS[0];
  const setDarkMode = darkmodeVARS[1];
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
