import { createReducer } from '@reduxjs/toolkit';
import actions from './apartmetnsDetailsAction';

const apartmentsDetailsReduser = createReducer(
  {},
  {
    [actions.getApartmentsDetailsSuccess]: (_, { payload }) =>
      payload,
  },
);

export default apartmentsDetailsReduser;
