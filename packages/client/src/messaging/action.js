export const REPORT_ERROR_MESSAGE = "message/REPORT_ERROR_MESSAGE";
export const REPORT_SUCCESS_MESSAGE = "message/REPORT_SUCCESS_MESSAGE";
export const CLEAR_MESSAGE = "message/CLEAR_MESSAGE";

export const reportErrorMessage = (message) => ({
  type: REPORT_ERROR_MESSAGE,
  payload: { message }
});
export const reportSuccessMessage = (message) => ({
  type: REPORT_SUCCESS_MESSAGE,
  payload: { message }
});
export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});