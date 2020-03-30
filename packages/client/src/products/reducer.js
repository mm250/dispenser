import {
  ADD_SELECT_PRODUCT,
  EDIT_SELECT_PRODUCT,
  REMOVE_ALL_SELECT_DRINKS_PRODUCT,
  REMOVE_SELECT_PRODUCT, UPDATE_PRODUCT_STOCK
} from './action'

export const getProductLevel = (product, level = 30) => ({ ...product, ...{ level }});
export const getProductQty = (product, qty = 1) => ({ ...product, ...{ qty }});

export const TYPE = { DRINK: 'drink', ADD_ON: 'addon' };

export const PRODUCTS = {
  COFFEE: { id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK },
  TEA: { id: 'TEA', name: 'Tea', type: TYPE.DRINK },
  MILK: { id: 'MILK', name: 'Milk', type: TYPE.ADD_ON },
  SUGAR: { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON }
};

export const DEFAULT_STATE = {
  stock: {
    [PRODUCTS.COFFEE.id]: getProductLevel(PRODUCTS.COFFEE),
    [PRODUCTS.TEA.id]: getProductLevel(PRODUCTS.TEA),
    [PRODUCTS.MILK.id]: getProductLevel(PRODUCTS.MILK),
    [PRODUCTS.SUGAR.id]: getProductLevel(PRODUCTS.SUGAR),
  },
  selected: []
};

export const reducer = (state= DEFAULT_STATE, { type, payload }) => {
  switch (type) {

    case UPDATE_PRODUCT_STOCK: {
      return {
        ...state,
        stock: {...state.stock, ...payload.stock}
      }
    }

    case ADD_SELECT_PRODUCT: {
      return  {
        ...state,
        selected: [...state.selected, payload.stockProduct]
      }
    }

    case EDIT_SELECT_PRODUCT: {
      return  {
        ...state,
        selected: state.selected.map((product, index) => {
          if (product.id !== payload.stockProduct.id) return product
          return {
            ...product,
            ...payload.stockProduct
          }
        })
      }
    }

    case REMOVE_SELECT_PRODUCT: {
      return {
        ...state,
        selected: state.selected.filter(product => product.id !== payload.stockProduct.id)
      }
    }

    case REMOVE_ALL_SELECT_DRINKS_PRODUCT: {
      return {
        ...state,
        selected: state.selected.filter(product => product.type === TYPE.ADD_ON)
      }
    }

    default:
      return state;
  }
}