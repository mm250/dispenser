import { expect } from 'chai';
import {
  getStock,
  getStockMap,
  getSelectedProducts,
  getLowStock,
  getDrinks,
  getAddons
} from './selector';

import { STORE, LOW_STOCK_STORE } from '../test/mock_data/store';
import { TYPE } from "./reducer";

describe('[products/selectors]', () => {

  describe('getStock', () => {
    it('should return an array containing stock data ', () => {
      expect(getStock(STORE)).to.eql(
        [{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, level: 30 },
        { id: 'TEA', name: 'Tea', type: TYPE.DRINK, level: 30 },
        { id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, level: 30 },
        { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON, level: 30 }]
      )
    })
  })

  describe('getStockMap', () => {
    it('should return an object containing stock data ', () => {
      expect(getStockMap(STORE)).to.eql({
        COFFEE:{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, level: 30 },
        TEA: { id: 'TEA', name: 'Tea', type: TYPE.DRINK, level: 30 },
        MILK: { id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, level: 30 },
        SUGAR: { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON, level: 30 }
      })
    })
  })

  describe('getSelectedProducts', () => {
    it('should return array of selected products', () => {
      expect(getSelectedProducts(STORE)).to.eql([{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, qty: 1 }])
    })
  })

  describe('getLowStock', () => {
    it('should return an empty array if no stock low', () => {
      expect(getLowStock(STORE)).to.eql([])
    })

    it('should return an array containing one low stock product', () => {
      expect(getLowStock(LOW_STOCK_STORE)).to.eql([{ id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, level: 24 }])
    })
  })

  describe('getDrinks', () => {
    it('should get all the drink products', () => {
      expect(getDrinks(STORE)).to.eql(
        [{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK },
          { id: 'TEA', name: 'Tea', type: TYPE.DRINK }]
      )
    })
  })

  describe('getAddons', () => {
    it('should get all non-drink products', () => {
      expect(getAddons(STORE)).to.eql(
        [{ id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, qty: 0 } ,
          { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON, qty: 0  }]
      )
    })
  })
})