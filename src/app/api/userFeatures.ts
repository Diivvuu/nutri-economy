import { apiRequest } from './api';

export const getDiseaseAPI = async (symptoms: any) => {
  try {
    const response = await apiRequest(`/predict`, 'POST', { symptoms });
    return response;
  } catch (error: any) {
    console.error('Error getting diesase', error);
    throw new Error(error.message);
  }
};
