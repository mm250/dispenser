import { TEMPERATURE_RESPONSE } from "./mockData/responses";

export function onGetTemperature(temperatureRequest) {
    console.log("dispenser temperature history: ", temperatureRequest);
    return TEMPERATURE_RESPONSE;
}

export function onPostTemperature(temperatureRequest) {
    console.log("dispenser temperature: ", temperatureRequest);
}

export function onLowStockAlert(lowStock) {
    console.log("low stock: ", lowStock);
}