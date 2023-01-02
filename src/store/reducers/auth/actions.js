import axios from 'axios';
import UserService from '../../../api/UserService';
import { SET_AUTH, SET_ERROR, SET_LOADING, SET_USER } from './types';

export const authActions = {
  setUser: (user) => ({ type: SET_USER, payload: user }),
  setAuth: (bool) => ({ type: SET_AUTH, payload: bool }),
  setLoading: (bool) => ({ type: SET_LOADING, payload: bool }),
  setError: (err) => ({ type: SET_ERROR, payload: err }),
  login: (username, password) => async (dispatch) => {
    try {
      dispatch(authActions.setLoading(true));
      setTimeout(async () => {
        const response = await UserService.getUsers();
        const mockUser = response.data.find((user) => user.username === username && user.password === password);

        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(authActions.setUser(mockUser));
          dispatch(authActions.setAuth(true));
        } else {
          dispatch(authActions.setError('Неккоректный логин или пароль'));
        }
        dispatch(authActions.setLoading(false));
      });
    } catch (e) {
      dispatch(authActions.setError('Произошла ошибка при логине'));
    }
  },
  logout: () => (dispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(authActions.setAuth(false));
    dispatch(authActions.setUser({}));
  },
};
