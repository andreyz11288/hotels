import actions from './apartmetnsDetailsAction';
import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

const getApartmentsDetails = id => dispatch => {
  dispatch(actions.getApartmentsDetailsRequest());
  axios
    .get(`/apartments/${id}`)
    .then(({ data }) => {
      console.log(data);
      return dispatch(actions.getApartmentsDetailsSuccess(data));
    })
    .catch(error =>
      dispatch(actions.getApartmentsDetailsError(error.message)),
    );
};
const apartmentsDetailsOperations = {
  getApartmentsDetails,
};

export default apartmentsDetailsOperations;
