import { createSelector } from 'reselect';

const getRoot = (state) => state.machine;

export const getMachineId = createSelector(getRoot, state => state.machine_id);