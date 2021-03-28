// import {createSelector} from '@reduxjs/toolkit';

const getBestHotels = state => state.bestHotels.items;

// const getFilteredHotels = (state) => state.bestHotels.items.sort((a, b) => a.rating - b.rating);

export default { getBestHotels};
