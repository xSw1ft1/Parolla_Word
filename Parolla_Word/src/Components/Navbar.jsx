import React, { useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <h2>Lexora</h2>
      </div>

      <div className="right-side">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <div className="help-icon">?</div>
      </div>
    </div>
  );
}

export default Navbar;
