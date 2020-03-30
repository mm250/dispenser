import { REPORT_SUCCESS_MESSAGE, REPORT_ERROR_MESSAGE, CLEAR_MESSAGE } from "../messaging/action";

export const DEFAULT_STATE = {};

export const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case REPORT_SUCCESS_MESSAGE:
    case REPORT_ERROR_MESSAGE: {
      return {
        message: {
          type: (type === REPORT_ERROR_MESSAGE) ? 'error' : 'success',
          text: payload.message
        }
      }
    }

    case CLEAR_MESSAGE: {
      return DEFAULT_STATE
    }

    default:
      return state;
  }
}
