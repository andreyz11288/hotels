import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import actions from './apartmetnsDetailsAction';

const apartmentsDetailsReducer = createReducer(
  {},
  {
    [actions.getApartmentsDetailsSuccess]: (_, { payload }) =>
      payload,
  },
);

const sendReviewsReducer = createReducer([], {
  [actions.sendReviewsSuccess]: (state, {payload}) => [...state, payload],
  [actions.getApartmentsDetailsSuccess]: (_, { payload }) =>
  payload.reviews,

},)



export default combineReducers({
  apartmentsDetailsReducer,
  sendReviewsReducer,
})
