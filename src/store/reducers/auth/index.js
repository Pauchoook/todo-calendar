import { SET_AUTH, SET_ERROR, SET_LOADING, SET_USER } from "./types";

const initialState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
