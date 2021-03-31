import { createAction } from '@reduxjs/toolkit';

const getApartmentsDetailsRequest = createAction(
  'getApartmentsDetailsRequest',
);
const getApartmentsDetailsSuccess = createAction(
  'getApartmentsDetailsSuccess',
);
const getApartmentsDetailsError = createAction(
  'getApartmentsDetailsError',
);
const sendReviewsRequest = createAction('sendReviewsRequest',);
const sendReviewsSuccess = createAction('sendReviewsSuccess',);
const sendReviewsError = createAction('sendReviewsError',);

const bookApartmentsRequest = createAction('bookApartmentsRequest');
const bookApartmentsSuccess = createAction('bookApartmentsSuccess');
const bookApartmentsError = createAction('bookApartmentsError');


const apartmentsActions = {
  getApartmentsDetailsRequest,
  getApartmentsDetailsSuccess,
  getApartmentsDetailsError,
  sendReviewsRequest,
  sendReviewsSuccess,
  sendReviewsError,
  bookApartmentsRequest,
  bookApartmentsSuccess,
  bookApartmentsError,
};

export default apartmentsActions;
