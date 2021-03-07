import { createAction } from '@reduxjs/toolkit';

const fetchOrdersRequest = createAction('cabinet/fetchOrdersRequest');
const fetchOrdersSuccess = createAction('cabinet/fetchOrdersSuccess');
const fetchOrdersError = createAction('cabinet/fetchOrdersError');

const deleteOrderRequest = createAction(
  'cabinet/deletehOrderRequest',
);
const deleteOrderSuccess = createAction(
  'cabinet/deletehOrderSuccess',
);
const deleteOrderError = createAction('cabinet/deletehOrderError');

const actions = {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersError,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderError,
};

export default actions;
