import { TEMPERATUE_ENDPOINT } from '../endpoints/api'

const objectToQueryString = (obj) => Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

export const postSubmitTemperatureReading = (params) =>
  fetch(TEMPERATUE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(params)
  });

export const getTemperatureReadings = (params) =>
  fetch(`${TEMPERATUE_ENDPOINT}?${objectToQueryString(params)}`, {
    method: "GET",
    headers: { "Content-Type": "application/json"}
  }).then(response => response.json());