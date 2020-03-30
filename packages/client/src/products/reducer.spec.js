import deepFreeze from 'deep-freeze'
import { expect } from 'chai';
import { reducer, getProductLevel, PRODUCTS } from './reducer'
import {
  updateProductStock,
  addSelectProduct,
  editSelectProduct,
  removeAllSelectDrinksProduct,
  removeSelectProduct
} from './action'

const DEFAULT_STATE = deepFreeze({
  stock: {
    [PRODUCTS.COFFEE.id]: getProductLevel(PRODUCTS.COFFEE),
    [PRODUCTS.TEA.id]: getProductLevel(PRODUCTS.TEA),
    [PRODUCTS.MILK.id]: getProductLevel(PRODUCTS.MILK),
    [PRODUCTS.SUGAR.id]: getProductLevel(PRODUCTS.SUGAR),
  },
  selected: []
});

describe('[products/reducer]', () => {
  it('should return the original state when an unmatched action applied', () => {
      const action = deepFreeze({ type: 'dummyAction' });
      const state = reducer(DEFAULT_STATE, action);
      expect(state).to.eql(DEFAULT_STATE);
  })

  it('should update the given product stock levels', () => {

    const STOCK_PRODUCT = {
      COFFEE: { id: 'COFFEE', name: 'Coffee', type: 'drink', level: 24 }
    }

    const action = deepFreeze(updateProductStock(STOCK_PRODUCT));
    const state = reducer(DEFAULT_STATE, action);

    const UPDATED_STORE = {
      ...DEFAULT_STATE,
      stock: { ...DEFAULT_STATE.stock, ...STOCK_PRODUCT }
    }

    expect(state).to.eql(UPDATED_STORE);
  })

  it('should edit the qty of the selected product in the store', () => {

    const SELECTED_PRODUCT = { id: 'MILK', name: 'Milk', type: 'addon', qty: 1 };
    const DEFAULT_STATE_WITH_PRODUCT_SELECTED = { ...DEFAULT_STATE, selected: [SELECTED_PRODUCT] }

    const STOCK_PRODUCT = { id: 'MILK', name: 'Milk', type: 'addon', qty: 2 };

    const action = deepFreeze(editSelectProduct(STOCK_PRODUCT));
    const state = reducer(deepFreeze(DEFAULT_STATE_WITH_PRODUCT_SELECTED), action);

    const UPDATED_STORE = { ...DEFAULT_STATE, selected: [STOCK_PRODUCT] };

    expect(state).to.eql(UPDATED_STORE);
  })

  it('should add a selected product to the store', () => {
    const STOCK_PRODUCT = { id: 'MILK', name: 'Milk', type: 'addon', qty: 1 };
    const action = deepFreeze(addSelectProduct(STOCK_PRODUCT));
    const state = reducer(DEFAULT_STATE, action);
    const UPDATED_STORE = { ...DEFAULT_STATE, selected: [STOCK_PRODUCT] };
    expect(state).to.eql(UPDATED_STORE);
  })

  it('should remove all selected drink products from the store', () => {
    const DEFAULT_STATE_WITH_PRODUCT_SELECTED = { ...DEFAULT_STATE, selected:
        [{ iid: 'COFFEE', name: 'Coffee', type: 'drink', qty: 1 },
          { id: 'TEA', name: 'Tea', type: 'drink', qty: 1 },
          { id: 'MILK', name: 'Milk', type: 'addon', qty: 1}]
    }
    const action = deepFreeze(removeAllSelectDrinksProduct());
    const state = reducer(deepFreeze(DEFAULT_STATE_WITH_PRODUCT_SELECTED), action);
    const UPDATED_STORE = { ...DEFAULT_STATE, selected:  [{ id: 'MILK', name: 'Milk', type: 'addon', qty: 1}] };
    expect(state).to.eql(UPDATED_STORE);
  })

  it('should remove the given product from the selected list in the store', () => {
    const STOCK_PRODUCT = { id: 'MILK', name: 'Milk', type: 'addon', qty: 1 };
    const DEFAULT_STATE_WITH_PRODUCT_SELECTED = { ...DEFAULT_STATE, selected:
        [{ iid: 'COFFEE', name: 'Coffee', type: 'drink', qty: 1 },
          { id: 'TEA', name: 'Tea', type: 'drink', qty: 1 },
          { id: 'MILK', name: 'Milk', type: 'addon', qty: 1}]
    }
    const action = deepFreeze(removeSelectProduct(STOCK_PRODUCT));
    const state = reducer(deepFreeze(DEFAULT_STATE_WITH_PRODUCT_SELECTED), action);

    const UPDATED_STORE = { ...DEFAULT_STATE, selected:
        [{ iid: 'COFFEE', name: 'Coffee', type: 'drink', qty: 1 },
          { id: 'TEA', name: 'Tea', type: 'drink', qty: 1 }] };

    expect(state).to.eql(UPDATED_STORE);
  })
})