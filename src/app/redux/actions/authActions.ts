import { getUserAPI, loginAPI, registerAPI } from '@/app/api/auth';
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_REGISTER_FAILURE,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
} from '../actionTypes';
import { AppDispatch } from '../store';

const postRegisterRequest = () => ({
  type: POST_REGISTER_REQUEST,
});
const postRegisterSuccess = (response: any) => ({
  type: POST_REGISTER_SUCCESS,
});
const postRegisterFailure = (error: string) => ({
  type: POST_REGISTER_FAILURE,
});
export const postRegister = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(postRegisterRequest());
    try {
      const data = await registerAPI(username, password);
      dispatch(postRegisterSuccess(data));
      return { success: true, data, message: 'User registered successfully' };
    } catch (error: any) {
      console.log(error.message);
      dispatch(postRegisterFailure(error.message));
      throw error;
    }
  };
};

const postLoginRequest = () => ({
  type: POST_REGISTER_REQUEST,
});
const postLoginSuccess = (response: any) => ({
  type: POST_REGISTER_SUCCESS,
});
const postLoginFailure = (error: string) => ({
  type: POST_REGISTER_FAILURE,
});
export const postLogin = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(postLoginRequest());
    try {
      const data = await loginAPI(username, password);
      dispatch(postLoginSuccess(data));
      return { success: true, data, message: 'User registered successfully' };
    } catch (error: any) {
      const errorData = error.response?.data?.detail || error.message;
      dispatch(postLoginFailure(errorData));
      return { success: false, error: errorData };
    }
  };
};

const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});
const getUserSuccess = (user: any) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
const getUserFailure = (error: string) => ({
  type: GET_USER_FAILURE,
  payload: error,
});
export const getUser = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getUserRequest());
    try {
      const data = await getUserAPI();
      dispatch(getUserSuccess(data));
      return { success: true, data, message: 'User registered successfully' };
    } catch (error: any) {
      console.log(error.message);
      dispatch(getUserFailure(error.message));
      throw error;
    }
  };
};
