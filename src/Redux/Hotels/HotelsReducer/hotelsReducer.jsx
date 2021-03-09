import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../HotelsActions/hotelsActions';
const apartments = createReducer([], {
  [actions.getHotelsSuccess]: (state, { payload }) => payload,
});
const cities = createReducer([], {
  [actions.getCitiesSuccess]: (state, { payload }) => payload,
});
const filter = createReducer(
  { city: '', price: '' },
  {
    [actions.actionFilter]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  apartments,
  filter,
  cities,
});
