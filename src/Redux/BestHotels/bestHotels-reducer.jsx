import { combineReducers, createReducer } from '@reduxjs/toolkit';
import bestHotelsActions from './bestHotels-actions';

const items = createReducer([], {
  [bestHotelsActions.getBestHotelsSuccess]: (_, {payload}) => payload.filter((item) => item.rating >= 3)
});

export default combineReducers({items});
