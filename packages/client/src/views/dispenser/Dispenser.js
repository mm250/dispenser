import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDrinkProduct } from '../../products/action';

import Addon from './Addon';
import DispenserFooter from "./DispenserFooter";

import { getDrinks, getAddons, getSelectedProducts } from "../../products/selector";

import './Dispenser.css';

function Dispenser(
  {
    drinks,
    addons,
    selectedProduct,
    onSelectDrinkProduct
  }) {
    return (
      <div>
        <div className="dispenser">
          <div className="dispenser-container">
            {
              drinks.map((drink, key) =>
                <button
                  key={key}
                  className={
                    selectedProduct.filter(item =>
                      item.id === drink.id
                    ).length ? 'dispenser-btn dispenser-btn-selected' : 'dispenser-btn'
                  }
                  onClick={ () => onSelectDrinkProduct(drink)}
                >
                  {drink.name}
                </button>
              )
            }
          </div>
          <div>
            {
              addons.map(
                (addon, key) => <Addon key={ key } product={ addon } />
              )
            }
          </div>
        </div>
        <DispenserFooter/>
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  drinks: getDrinks,
  addons: getAddons,
  selectedProduct: getSelectedProducts
});

const mapDispatchToProps = dispatch => ({
  onSelectDrinkProduct: (drink) => dispatch(selectDrinkProduct(drink))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dispenser)