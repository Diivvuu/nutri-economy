import { getDiseaseAPI } from '@/app/api/userFeatures';
import {
  GET_DISEASE_FAILURE,
  GET_DISEASE_REQUEST,
  GET_DISEASE_SUCCESS,
} from '../actionTypes';
import { AppDispatch } from '../store';

const getDiseaseRequest = () => ({
  type: GET_DISEASE_REQUEST,
});
const getDiseaseSuccess = (disease: any) => ({
  type: GET_DISEASE_SUCCESS,
  payload: disease,
});
const getDiseaseFailure = (error: string) => ({
  type: GET_DISEASE_FAILURE,
  payload: error,
});
export const getDisease = (symptoms: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getDiseaseRequest());
    try {
      const data = await getDiseaseAPI(symptoms);
      dispatch(getDiseaseSuccess(data));
      return {
        success: true,
        data,
        message: 'Disease fetched succesfully',
      };
    } catch (error: any) {
      dispatch(getDiseaseFailure(error));
    }
  };
};
