import actions from './apartmetnsDetailsAction';
import axios from 'axios';

// axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const getApartmentsDetails = id => dispatch => {
  dispatch(actions.getApartmentsDetailsRequest());
  axios
    .get(`/apartments/${id}`)
    .then(({ data }) => {
      
      return dispatch(actions.getApartmentsDetailsSuccess(data));
    })
    .catch(error =>
      dispatch(actions.getApartmentsDetailsError(error.message)),
    );
};

const sendReviews = (id, credentials) => async (dispatch) => {
  dispatch(actions.sendReviewsRequest())
  try {
    const res = await axios.post(`/apartments/${id}/reviews`, credentials);
    // token.set(res.data.token);
    console.log(res);
    dispatch(actions.sendReviewsSuccess(res.data));

  } catch (error) {
    dispatch(actions.sendReviewsError(error.message));
  }
  
}  
const bookApartments = (id, credentials) => async(dispatch) => {
  dispatch(actions.bookApartmentsRequest())
  try{
    const res = await axios.post('/orders', credentials);
    console.log(res);
    dispatch(actions.bookApartmentsSuccess(res.data));
  }
  catch (error){
dispatch(actions.bookApartmentsError(error.message));
  }
}
  

const apartmentsDetailsOperations = {
  getApartmentsDetails,
  sendReviews,
  bookApartments,
};

export default apartmentsDetailsOperations;
