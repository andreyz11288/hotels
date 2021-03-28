import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import {
  bestHotelsOperations,
  bestHotelsSelectors,
} from '../../Redux/BestHotels';
import BestHotelItem from './BestHotelItem';
import s from './BestHotelsRaiting.module.scss';

export default function BestHotelsRaiting() {
  const dispatch = useDispatch();

  const bestHotels = useSelector(bestHotelsSelectors.getBestHotels);

  const [sortHotels, setSortHotels] = useState(bestHotels);

  useEffect(() => {
    // перезаписываем
    const sH = JSON.parse(JSON.stringify(bestHotels));
    setSortHotels(sH.sort((a, b) => b.rating - a.rating));
  }, [bestHotels]);


  useEffect(() => {
    dispatch(bestHotelsOperations.getBestHotels());
  }, [dispatch]);

  return (
    <section className={s.bestHotels}>
      <TransitionGroup component="ul" className={s.bestHotelsList}>
        {sortHotels.map(hotels => {
          return <BestHotelItem key={hotels.id} hotels={hotels} />;
        })}
      </TransitionGroup>
    </section>
  );
}
