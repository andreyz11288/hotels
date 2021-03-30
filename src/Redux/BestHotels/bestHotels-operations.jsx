import bestHotelsActions from './bestHotels-actions';
import axios from 'axios';

const getBestHotels = () => dispatch => {
  dispatch(bestHotelsActions.getBestHotelsRequest());
  axios
    .get('/apartments')
    .then(({ data }) => {
      // не нужно так делать, сильно долго ждать
      // data.sort((a, b) => b.rating - a.rating);
      dispatch(bestHotelsActions.getBestHotelsSuccess(data));
    })
    .catch(error => dispatch(bestHotelsActions.getBestHotelsError(error.message)));
};
const exported = { getBestHotels}
export default exported;
