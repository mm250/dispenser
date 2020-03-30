import {
  SUCCESS_RETRIEVE_TEMPERATURE_READINGS,
  SUCCESS_POLLING_SUBMIT_TEMPERATURE_READING
} from "./action";


export const DEFAULT_STATE = {
  current: { temperature: 30, lastSubmitted: "" },
  history: []
};

export const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {

    case SUCCESS_RETRIEVE_TEMPERATURE_READINGS: {
      return  {
        ...state,
        history: payload.readings
      }
    }

    case SUCCESS_POLLING_SUBMIT_TEMPERATURE_READING: {
      return  {
        ...state,
        current: {
          ...state.current,
          lastSubmitted: payload.lastSubmitted
        }
      }
    }

    default:
      return state;
  }
}

