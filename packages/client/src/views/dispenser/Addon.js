import React from 'react';
import { connect } from 'react-redux';

import { selectAddonAdd, selectAddonRemove } from "../../products/action";

import './Addon.css';


function Addon({ product, onSelectAdd, onSelectRemove }) {
  return (
    <div className="addon">
      <div className="addon-name">{product.name}</div>
      <div>
        <span>{product.qty}</span>
        <button
          className="addon-btn"
          onClick={() => onSelectAdd(product)}>+</button>
        <button
          className="addon-btn"
          onClick={() => onSelectRemove(product)}>-</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSelectAdd: (payload) => dispatch(selectAddonAdd(payload)),
  onSelectRemove: (payload) => dispatch(selectAddonRemove(payload))
})

export default connect(null, mapDispatchToProps)(Addon);