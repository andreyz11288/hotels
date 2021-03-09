import { createAction } from '@reduxjs/toolkit';

const getHotelsRequest = createAction('getHotelsRequest');
const getHotelsSuccess = createAction('getHotelsSuccess');
const getHotelsError = createAction('getHotelsError');
const getCitiesRequest = createAction('getCitiesRequest');
const getCitiesSuccess = createAction('getCitiesSuccess');
const getCitiesError = createAction('getCitiesError');
const actionFilter = createAction('actionFilter');
const exported = {
  getHotelsRequest,
  getHotelsSuccess,
  getHotelsError,
  actionFilter,
  getCitiesRequest,
  getCitiesSuccess,
  getCitiesError,
};

export default exported;
