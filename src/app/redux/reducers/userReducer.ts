import {
  GET_DISEASE_FAILURE,
  GET_DISEASE_REQUEST,
  GET_DISEASE_SUCCESS,
} from '../actionTypes';

const inititalState = {
  predicted_disease: { response: [], loading: false, error: null },
};

const userReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case GET_DISEASE_REQUEST:
      return {
        ...state,
        predicted_disease: {
          response: [],
          loading: true,
          error: null,
        },
      };
    case GET_DISEASE_SUCCESS:
      return {
        ...state,
        predicted_disease: {
          response: action.payload,
          loading: false,
          error: null,
        },
      };
    case GET_DISEASE_FAILURE:
      return {
        ...state,
        predicted_disease: {
          response: [],
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
