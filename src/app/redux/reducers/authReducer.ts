import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_FAILURE,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
} from '../actionTypes';

const initialState = {
  register: {
    user: [],
    loading: false,
    error: null,
  },
  login: {
    user: [],
    loading: false,
    error: null,
  },
  get_user: {
    user: [],
    loading: false,
    error: null,
  },
};
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_REGISTER_REQUEST:
      return {
        ...state,
        register: { user: [], loading: true, error: null },
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        register: { user: action.payload, loading: false, error: null },
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        register: { user: [], loading: false, error: null },
      };
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        login: { user: [], loading: true, error: null },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        login: { user: action.payload, loading: false, error: null },
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        login: { user: [], loading: false, error: action.payload },
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        get_user: { user: [], loading: true, error: null },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        get_user: { user: action.payload, loading: false, error: null },
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        get_user: { user: [], loading: false, error: action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
