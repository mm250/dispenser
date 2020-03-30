import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";
import { attemptBuyDrinkProduct } from '../../products/action';

function DispenserFooter(
  {
    dispatchBuyDrinkProduct
  })
{
  return (
    <div>
      <button onClick={ () => dispatchBuyDrinkProduct() }>Buy</button>
    </div>
  );
}

DispenserFooter.propTypes = {
  dispatchBuyDrinkProduct: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchBuyDrinkProduct: () => dispatch(attemptBuyDrinkProduct())
})

export default connect(null, mapDispatchToProps)(DispenserFooter);