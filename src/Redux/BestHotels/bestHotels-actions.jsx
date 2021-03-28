import { createAction } from '@reduxjs/toolkit';

const getBestHotelsRequest = createAction('getBestHotelsRequest');
const getBestHotelsSuccess = createAction('getBestHotelsSuccess');
const getBestHotelsError = createAction('getBestHotelsError');

export default {
  getBestHotelsRequest,
  getBestHotelsSuccess,
  getBestHotelsError,
};
