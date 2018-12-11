import axios from 'axios';
import { Storage } from './../util/utils';
import {
  REQUEST,
  SUCCESS,
  FAILURE
} from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  GET_SESSION: 'authentication/GET_SESSION',
  LOGOUT: 'authentication/LOGOUT',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE'
};

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  account: {} as any,
  errorMessage: null as string, // Errors returned from server side
  redirectMessage: null as string,
  sessionHasBeenFetched: false
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (
  state: AuthenticationState = initialState,
  action
): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
    case REQUEST(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        loginError: true
      };
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: false,
        loginError: false,
        loginSuccess: true
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState
      };
    case SUCCESS(ACTION_TYPES.GET_SESSION): {
      const isAuthenticated =
        action.payload && action.payload.data && true;
      console.log('Login Success');
      console.log(action.payload.data);
      console.log(isAuthenticated);
      return {
        ...state,
        isAuthenticated,
        loading: false,
        sessionHasBeenFetched: true,
        account: action.payload.data
      };
    }
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
        redirectMessage: action.message
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export const displayAuthError = message => ({
  type: ACTION_TYPES.ERROR_MESSAGE,
  message
});

export const getSession = () => async (dispatch, getState) => {
  dispatch({
    type: ACTION_TYPES.GET_SESSION,
    /*payload: axios.get('actions_alps/login')*/
    payload: axios.get('actions_alps/api/test')
  });
};

export const login = (username, password, rememberMe = false) => async (dispatch, getState) => {
  const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(
    password
  )}`;
  const result = await dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: axios.post('actions_alps/login', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  });
  Storage.local.set('ACCOUNT_DATA', result.value.data);
  console.log(result);
  await dispatch(getSession());
};
export const logout = () => async dispatch => {
  console.log('Log out init');
  await dispatch({
    type: ACTION_TYPES.LOGOUT,
    payload: axios.get('actions_alps/logout')
  });
  console.log('Log out Successfully');
  dispatch(getSession());
};

export const clearStorage = () => {
  if (Storage.local.get('ACCOUNT_DATA')) {
    Storage.local.remove('ACCOUNT_DATA');
  }
};

export const clearAuthentication = messageKey => (dispatch, getState) => {
  clearStorage();
  dispatch(displayAuthError(messageKey));
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH
  });
};
