import React from 'react';
import {PropTypes} from "prop-types";

import './Header.css';

function Header(
  {
    view,
    onDrinks,
    onMaintenance
  })
{
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

Header.propTypes = {
  view: PropTypes.string.isRequired,
  onMaintenance: PropTypes.func.isRequired,
  onDrinks: PropTypes.func.isRequired
};

export default Header;