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

const apartmentsActions = {
  getApartmentsDetailsRequest,
  getApartmentsDetailsSuccess,
  getApartmentsDetailsError,
};

export default apartmentsActions;
