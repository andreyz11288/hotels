import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import cabinetActions from './cabinet-actions';

const myOrders = createReducer([], {
  [cabinetActions.fetchOrdersSuccess]: (_, { payload }) => payload,
  [cabinetActions.deleteOrderSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const error = createReducer(null, {
  [cabinetActions.fetchOrdersError]: (_, { payload }) => payload,
  [cabinetActions.deleteOrderError]: (_, { payload }) => payload,
});

export default combineReducers({
  myOrders,
  error,
});
