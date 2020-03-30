import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';

import { postLowStock } from './request';
import { getProductQty } from './reducer';

import { getSelectedProducts, getStockMap, getLowStock } from './selector';

import { reportErrorMessage, reportSuccessMessage } from '../messaging/action';
import {
  SUCCESS_SUBMITTING_LOW_STOCK_MESSAGE,
  ERROR_SUBMITTING_LOW_STOCK_MESSAGE
} from '../messaging/constant';

import { reportMessage } from '../messaging/saga';

import {
  ATTEMPT_BUY_DRINK_PRODUCT,
  SELECT_DRINK_PRODUCT,
  SELECT_ADDON_ADD,
  SELECT_ADDON_REMOVE,
  addSelectProduct,
  editSelectProduct,
  removeAllSelectDrinksProduct,
  removeSelectProduct,
  updateProductStock,
} from './action';

export const selectDrinkProduct = function* ({ payload: { stockProduct } }) {
  yield put(removeAllSelectDrinksProduct());
  yield put(addSelectProduct(getProductQty(stockProduct)));
}

export const selectAddonAdd = function* ({ payload: { stockProduct } }) {
  const product = getProductQty(stockProduct, stockProduct.qty + 1);
  (stockProduct.qty === 0) ?
    yield put(addSelectProduct(product)) :
    yield put(editSelectProduct(product));
}

export const selectAddonRemove = function* ({ payload: { stockProduct } }) {
  const product = getProductQty(stockProduct, stockProduct.qty - 1);
  (stockProduct.qty === 0) ?
    yield put(removeSelectProduct(product)) :
    yield put(editSelectProduct(product));
}

export const attemptBuyDrinkProduct = function* () {
  const selectedProducts = yield select(getSelectedProducts);
  const productstock = yield select(getStockMap);

  const updateStock = selectedProducts.map(product => ({
      ...productstock[product.id],
      level: productstock[product.id].level - product.qty
    }))
    .reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});

  yield put(updateProductStock(updateStock));
  yield call(submitLowStock);
}

const submitLowStock = function* () {
  const lowStock = yield select(getLowStock);
  if (lowStock.length) {
    try {
      yield call(postLowStock, lowStock);
      yield call(reportMessage, reportSuccessMessage(SUCCESS_SUBMITTING_LOW_STOCK_MESSAGE));
    } catch (e) {
      yield call(reportMessage, reportErrorMessage(ERROR_SUBMITTING_LOW_STOCK_MESSAGE));
    }
  }
}

export default function* () {
    yield takeLatest(ATTEMPT_BUY_DRINK_PRODUCT, attemptBuyDrinkProduct);
    yield takeEvery(SELECT_DRINK_PRODUCT, selectDrinkProduct);
    yield takeEvery(SELECT_ADDON_ADD, selectAddonAdd);
    yield takeEvery(SELECT_ADDON_REMOVE, selectAddonRemove);
}