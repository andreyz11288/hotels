import styles from './Hotels.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../Redux/Hotels/HotelsSelectors/hotelsSelectors';
import operations from '../../Redux/Hotels/HotelsOperations/hotelsOperations';
import HotelItem from './HotelsItem';
import Filter from './Filter';
import { TransitionGroup } from 'react-transition-group';

export default function Hotels() {
  const apartments = useSelector(selectors.getApartments);
  const dispatch = useDispatch();
  useEffect(() => {
    const getApartments = () => dispatch(operations.getAllHotels());
    getApartments();
  }, [dispatch]);

  return (
    <section className={styles.hotels}>
      <Filter apartments={apartments} />
      <TransitionGroup component="ul" className={styles.hotelsList}>
        <HotelItem apartments={apartments} />
      </TransitionGroup>
    </section>
  );
}
