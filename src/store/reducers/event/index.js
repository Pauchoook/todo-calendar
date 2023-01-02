import { SET_EVENTS, SET_GUESTS } from './types';

const initialState = {
  guests: [],
  events: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GUESTS:
      return { ...state, guests: action.payload };
    case SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}
