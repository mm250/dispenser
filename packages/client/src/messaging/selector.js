import { createSelector } from 'reselect';

const getRoot = (state) => state.messaging;

export const getMessage = createSelector(getRoot, state => state.message);