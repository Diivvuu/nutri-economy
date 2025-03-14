import { apiRequest } from './api';
import Cookies from 'js-cookie';

export const registerAPI = async (username: string, password: string) => {
  try {
    const response = await apiRequest(
      '/auth/register',
      'POST',
      { username, password },
      false
    );
    // console.log('api', response.access_token);
    // if (response?.access_token) {
    //   Cookies.set('access_token', response.access_token, {
    //     expires: 7,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'Strict',
    //   });
    // } else {
    //   throw new Error(response?.message || 'Login failed');
    // }
    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An unexpected error occured');
  }
};

export const loginAPI = async (username: string, password: string) => {
  try {
    const response = await apiRequest(
      '/auth/login',
      'POST',
      { username, password },
      false
    );
    console.log('api', response.access_token);
    if (response?.access_token) {
      Cookies.set('access_token', response.access_token, {
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      });
    } else {
      throw new Error(response?.message || 'Login failed');
    }
    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An unexpected error occured');
  }
};

export const getUserAPI = async () => {
  try {
    const response = await apiRequest(`/user/me`, 'GET');
    console.log('api', response.access_token);

    return response;
  } catch (error: any) {
    console.error('Error in getting user', error);
    throw new Error(error.message);
  }
};
