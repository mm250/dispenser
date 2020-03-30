import { LOW_STOCK_ALERT_ENDPOINT } from '../endpoints/api'

export const postLowStock = (body) =>
  fetch(LOW_STOCK_ALERT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
