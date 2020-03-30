import { createSelector } from 'reselect';

import { TYPE } from "./reducer";

const getRoot = (state) => state.products;

const LOW_STOCK_LEVEL = 25;

export const getStock = createSelector(getRoot, state => Object.values(state.stock));

export const getStockMap = createSelector(getRoot, state => state.stock);

export const getSelectedProducts = createSelector(getRoot, state => state.selected);

export const getLowStock = createSelector(getRoot, state => Object.values(state.stock).filter(product => product.level < LOW_STOCK_LEVEL));

export const getDrinks = createSelector(getRoot,state =>
  Object.values(state.stock)
    .filter(product => product.type === TYPE.DRINK)
    .map(({name, id, type}) => ({name, id, type})));

export const getAddons = createSelector(getRoot,state =>
  Object.values(state.stock)
    .filter(product => product.type === TYPE.ADD_ON)
    .map(({name, id, type}) => {
      const selectProduct = state.selected
        .filter(p => p.id === id)
        .reduce((p, c) => c, {});
      return {name, id, type, qty: selectProduct.qty | 0}
    }));