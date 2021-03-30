import { createAction } from '@reduxjs/toolkit';

const getBestHotelsRequest = createAction('getBestHotelsRequest');
const getBestHotelsSuccess = createAction('getBestHotelsSuccess');
const getBestHotelsError = createAction('getBestHotelsError');

const exported = {
  getBestHotelsRequest,
  getBestHotelsSuccess,
  getBestHotelsError,
}
export default exported;
