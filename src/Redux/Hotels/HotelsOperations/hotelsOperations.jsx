import actions from '../HotelsActions/hotelsActions';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';
const notify = () =>
  toast.error('🦄 Some server error occured!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const getAllHotels = () => dispatch => {
  dispatch(actions.getHotelsRequest());
  axios
    .get('/apartments')
    .then(({ data }) => dispatch(actions.getHotelsSuccess(data)))
    .catch(error => {
      notify();
      dispatch(actions.getHotelsError(error.message));
    });
};
const getAllCities = () => dispatch => {
  dispatch(actions.getCitiesRequest());
  axios
    .get('/cities')
    .then(({ data }) => dispatch(actions.getCitiesSuccess(data)))
    .catch(error => {
      notify();
      dispatch(actions.getCitiesError(error.message));
    });
};
const exported = {
  getAllHotels,
  getAllCities,
};

export default exported;
