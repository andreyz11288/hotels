import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../HotelsActions/hotelsActions';
const apartments = createReducer([], {
  [actions.getHotelsSuccess]: (state, { payload }) => payload,
});

export default combineReducers({
  apartments,
});
