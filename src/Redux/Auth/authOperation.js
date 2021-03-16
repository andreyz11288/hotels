import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutSuccess,
  logoutError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authAction';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerAuth = credentials => async dispatch => {
  const notify = text => toast.error(text);
  dispatch(registerStart());
  try {
    const response = await axios.post('/users/register', credentials);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.log(error.response.data.message);
    if (error.message === 'Request failed with status code 409') {
      notify('Mail is already in use');
    } else if (
      error.response.data.message === '"email" must be a valid email'
    ) {
      notify('Incorrect email format');
    } else if (
      error.response.data.message ===
      '"name" length must be at least 3 characters long'
    ) {
      notify('Login length must be at least 3 characters long');
    } else if (
      error.response.data.message ===
      '"password" length must be at least 6 characters long'
    ) {
      notify('Password length must be at least 6 characters long');
    } else if (
      error.response.data.message ===
      '"name" must only contain alpha-numeric characters'
    ) {
      notify('Only in English');
    }
    dispatch(registerError(error));
  }
};

const loginAuth = credentials => async dispatch => {
  const notify = () => toast.error('incorrect  Email or Password!');
  dispatch(loginStart());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    notify();
    dispatch(loginError(error.message));
  }
};

const logOutAuth = () => async dispatch => {
  dispatch(logoutStart());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserStart());
  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { registerAuth, loginAuth, logOutAuth, getCurrentUser };
