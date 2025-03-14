import { setError } from '../redux/errorSlice';
import { store } from '../redux/store';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
  authRequired: boolean = true
) => {
  try {
    const token = Cookies.get('access_token');

    const headers: HeadersInit = {
      Accept: 'application/json',
      ...(authRequired && token ? { Authorization: `Bearer ${token}` } : {}),
    };

    // Do not set Content-Type for FormData; the browser sets it automatically.
    const isFormData = body instanceof FormData;
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: isFormData ? body : JSON.stringify(body),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API Error ${response.status}: ${errorMessage}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Request Failed:', error.message);
    store.dispatch(setError(error.message || 'An unexpected error occurred'));
    throw error;
  }
};
