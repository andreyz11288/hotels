import actions from '../HotelsActions/hotelsActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

const getAllHotels = () => dispatch => {
  dispatch(actions.getHotelsRequest());
  axios
    .get('/apartments')
    .then(({ data }) => dispatch(actions.getHotelsSuccess(data)))
    .catch(error => dispatch(actions.getHotelsError(error.message)));
};

const exported = {
  getAllHotels,
};

export default exported;
