const getApartmentsDetails = state =>
  state.apartmentsDetails.apartmentsDetailsReducer;
const getReviews = state =>
  state.apartmentsDetails.sendReviewsReducer;

const exported = { getApartmentsDetails, getReviews };

export default exported;
