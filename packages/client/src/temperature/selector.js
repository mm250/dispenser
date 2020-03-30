import { createSelector, createStructuredSelector } from 'reselect';

const getRoot = (state) => state.temperature;

export const getTemperatureHistory = createSelector(getRoot,
    state => state.history.map(({temperature, timestamp}) => ({
      temperature, 
        timestamp:timestamp
    })));

export const getCurrentTemperature = createStructuredSelector({
  temperature: createSelector(getRoot, state => state.current.temperature),
  lastSubmitted: createSelector(getRoot, state => state.current.lastSubmitted.toLocaleString('en-GB', { timeZone: 'UTC' }))
})

export const getCurrentTemperatureRequest = state => ({
  machine_id: state.machine.machine_id,
  temperature: state.temperature.current.temperature,
  timestamp: new Date().getTime()
});

export const getDate = state => new Date();