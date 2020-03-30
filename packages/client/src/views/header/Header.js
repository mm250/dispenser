import React from 'react';

import './Header.css';

function Header({ view, onDrinks, onMaintenance }) {

  return (
    <div className="header">
      <button
        className={ view === "drinks" ? "header-btn header-btn-selected" : "header-btn" }
        onClick={() => onDrinks()}>
        Drinks
      </button>
      <button
        className={ view === "maintenance" ? "header-btn header-btn-selected" : "header-btn" }
        onClick={() => onMaintenance()}>
        Maintenance
      </button>
    </div>
  );
}

export default Header;