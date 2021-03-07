import axios from 'axios';
import cabinetActions from './cabinet-actions';

// axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

const fetchOrders = () => async dispatch => {
  dispatch(cabinetActions.fetchOrdersRequest());

  try {
    const { data } = await axios.get('/orders');
    dispatch(cabinetActions.fetchOrdersSuccess(data));
  } catch (error) {
    dispatch(cabinetActions.fetchOrdersError(error.message));
  }
};

const deleteOrder = id => async dispatch => {
  dispatch(cabinetActions.deleteOrderRequest());

  try {
    await axios.delete(`/orders/${id}`);

    dispatch(cabinetActions.deleteOrderSuccess(id));
  } catch (error) {
    dispatch(cabinetActions.deleteOrderError(error.message));
  }
};

const operations = { fetchOrders, deleteOrder };

export default operations;
