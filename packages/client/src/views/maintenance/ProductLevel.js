import React from 'react';
import {PropTypes} from "prop-types";

import './ProductLevel.css';

function ProductLevel(
  {
    name,
    level
  })
{
  return (
    <div className="productLevel">
      <div>{name}</div>
      <div>{level}</div>
    </div>
  );
}

ProductLevel.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

export default ProductLevel;