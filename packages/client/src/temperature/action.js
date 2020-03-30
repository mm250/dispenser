export const POLLING_SUBMIT_TEMPERATURE_READING = 'temperatue/POLLING_SUBMIT_TEMPERATURE_READING';
export const END_POLLING_SUBMIT_TEMPERATURE_READING = 'temperatue/END_POLLING_SUBMIT_TEMPERATURE_READING';
export const SUCCESS_POLLING_SUBMIT_TEMPERATURE_READING = 'temperatue/SUCCESS_POLLING_SUBMIT_TEMPERATURE_READING';

export const ATTEMPT_RETRIEVE_TEMPERATURE_READINGS = 'temperatue/ATTEMPT_RETRIEVE_TEMPERATURE_READINGS';
export const SUCCESS_RETRIEVE_TEMPERATURE_READINGS = 'temperatue/SUCCESS_RETRIEVE_TEMPERATURE_READINGS';

export const pollingSubmitTemperatureReading = () => ({
    type: POLLING_SUBMIT_TEMPERATURE_READING
});

export const endPollingSubmitTemperatureReading = () => ({
    type: END_POLLING_SUBMIT_TEMPERATURE_READING
});

export const successPollingSubmitTempatureReading = (lastSubmitted) => ({
    type: SUCCESS_POLLING_SUBMIT_TEMPERATURE_READING,
    payload: { lastSubmitted }
});

export const attemptRetrieveTemperatureReadings = (payload) => ({
    type: ATTEMPT_RETRIEVE_TEMPERATURE_READINGS,
    payload
});

export const successRetrieveTemperatureReadings = (readings) => ({
    type: SUCCESS_RETRIEVE_TEMPERATURE_READINGS,
    payload: { readings }
});