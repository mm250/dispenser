export const ATTEMPT_BUY_DRINK_PRODUCT= "product/ATTEMPT_BUY_DRINK_PRODUCT";

export const UPDATE_PRODUCT_STOCK = "product/UPDATE_PRODUCT_STOCK";

export const SELECT_DRINK_PRODUCT = "product/SELECT_DRINK_PRODUCT";
export const SELECT_ADDON_ADD = "product/SELECT_ADDON_ADD";
export const SELECT_ADDON_REMOVE = "product/SELECT_ADDON_REMOVE";

export const ADD_SELECT_PRODUCT = "product/ADD_SELECT_PRODUCT";
export const EDIT_SELECT_PRODUCT = "product/EDIT_SELECT_PRODUCT";
export const REMOVE_SELECT_PRODUCT = "product/REMOVE_SELECT_PRODUCT";

export const REMOVE_ALL_SELECT_DRINKS_PRODUCT = "product/REMOVE_ALL_SELECT_DRINKS_PRODUCT";

export const attemptBuyDrinkProduct = () => ({
    type: ATTEMPT_BUY_DRINK_PRODUCT
});

export const updateProductStock = (stock) => ({
    type: UPDATE_PRODUCT_STOCK,
    payload: { stock }
});

export const selectDrinkProduct = (stockProduct) => ({
    type: SELECT_DRINK_PRODUCT,
    payload: { stockProduct }
});

export const selectAddonAdd = (stockProduct) => ({
    type: SELECT_ADDON_ADD,
    payload: { stockProduct }
});

export const selectAddonRemove = (stockProduct) => ({
    type: SELECT_ADDON_REMOVE,
    payload: { stockProduct }
});

export const addSelectProduct = (stockProduct) => ({
    type: ADD_SELECT_PRODUCT,
    payload: { stockProduct }
});

export const editSelectProduct = (stockProduct) => ({
    type: EDIT_SELECT_PRODUCT,
    payload: { stockProduct }
});

export const removeSelectProduct = (stockProduct) => ({
    type: REMOVE_SELECT_PRODUCT,
    payload: { stockProduct }
});

export const removeAllSelectDrinksProduct = () => ({
    type: REMOVE_ALL_SELECT_DRINKS_PRODUCT
});
