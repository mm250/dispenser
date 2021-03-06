import React from 'react';
import ProductLevel from './ProductLevel';
import {PropTypes} from "prop-types";

import './ProductLevels.css';

function ProductLevels(
  {
    stock
  })
{
  return (
    <div className="product-levels">
      <div className="product-levels-heading">Stock Levels</div>
      <div className="product-levels-container">
        {
          stock.map((item, key) => <ProductLevel name={item.name} level={item.level} key={key}/>)
        }
      </div>
    </div>
  );
}

ProductLevels.propTypes = {
  stock: PropTypes.array.isRequired
};

export default ProductLevels;