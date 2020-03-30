import React from 'react';

import './ProductLevel.css';

function ProductLevel({ name, level,  }) {

  return (
    <div className="productLevel">
      <div>{name}</div>
      <div>{level}</div>
    </div>
  );
}

export default ProductLevel;