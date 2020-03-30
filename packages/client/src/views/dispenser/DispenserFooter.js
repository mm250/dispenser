import React from 'react';
import { connect } from 'react-redux';
import { attemptBuyDrinkProduct } from '../../products/action';

function DispenserFooter({ dispatchBuyDrinkProduct }) {
  return (
    <div>
      <button onClick={ () => dispatchBuyDrinkProduct() }>Buy</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchBuyDrinkProduct: () => dispatch(attemptBuyDrinkProduct())
})

export default connect(null, mapDispatchToProps)(DispenserFooter);