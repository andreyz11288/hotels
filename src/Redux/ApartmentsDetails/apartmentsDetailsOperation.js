import actions from './apartmetnsDetailsAction';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyError = () =>
  toast.error('🦄 Something was wrong', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySuccess = () =>
  toast.success('🦄 Thanks for your choice', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySuccessReview = () =>
  toast.success('🦄 Thanks for your review', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const getApartmentsDetails = id => async dispatch => {
  dispatch(actions.getApartmentsDetailsRequest());
  try {
    const res = await axios.get(`/apartments/${id}`);
    dispatch(actions.getApartmentsDetailsSuccess(res.data));
  } catch (error) {
    notifyError();
    dispatch(actions.getApartmentsDetailsError(error.message));
  }
};

const sendReviews = (id, credentials) => async dispatch => {
  dispatch(actions.sendReviewsRequest());
  try {
    const res = await axios.post(
      `/apartments/${id}/reviews`,
      credentials,
    );
    notifySuccessReview();
    console.log(res);
    dispatch(actions.sendReviewsSuccess(res.data));
  } catch (error) {
    dispatch(actions.sendReviewsError(error.message));
  }
};
const bookApartments = (apartmentId, date) => async dispatch => {
  dispatch(actions.bookApartmentsRequest());
  try {
    const res = await axios.post('/orders', { apartmentId, date });
    notifySuccess();

    dispatch(actions.bookApartmentsSuccess(res.data));

    setTimeout(() => {
      document.querySelector('#redirect-to-cabinet').click();
    }, 2000);
  } catch (error) {
    dispatch(actions.bookApartmentsError(error.message));
  }
};

const apartmentsDetailsOperations = {
  getApartmentsDetails,
  sendReviews,
  bookApartments,
};

export default apartmentsDetailsOperations;
