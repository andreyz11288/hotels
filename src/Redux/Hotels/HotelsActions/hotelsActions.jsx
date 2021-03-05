import { createAction } from '@reduxjs/toolkit';

const getHotelsRequest = createAction('getHotelsRequest');
const getHotelsSuccess = createAction('getHotelsSuccess');
const getHotelsError = createAction('getHotelsError');
const actionFilter = createAction('actionFilter');
const exported = {
  getHotelsRequest,
  getHotelsSuccess,
  getHotelsError,
  actionFilter,
};

export default exported;
