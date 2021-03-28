import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Rating from '../Hotels/Rating';
import LazyLoad from 'react-lazy-load';
import s from './BestHotelsRaiting.module.scss';
import style from '../Hotels/Hotels.module.scss'

export default function BestHotelItem({ hotels }) {
  const [rate, setRate] = useState(hotels.price);

  useEffect(() => {
    const getDiscount = () => {
      setRate(Math.round(rate * 0.85));
    };

    getDiscount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id, imgUrl, location, title, price, rating } = hotels;
  return (
    <CSSTransition
      key={id}
      in={true}
      appear={true}
      timeout={500}
      classNames={s}
      unmountOnExit
    >
      <li className={s.bestHotelsItem}>
        <div className={s.bestHotelsImgBlock}>
          <LazyLoad height="100%" offsetTop={300} debounce={false}>
            <img src={imgUrl} alt="Hotel" className={s.hotelImg} />
          </LazyLoad>
        </div>
        <div className={s.hotelBlock}>
          <div className={s.hotelBlockInner}>
            <h3 className={s.hotelBlockTitle}>{location.city}</h3>
            <p className={s.hotelBlockDescr}>{title}</p>
            <div className={style.ratingWrap}>
              <Rating rating={rating} />
            </div>

            <p className={s.hotelBlockDescr}>
              Order now and get a discount
            </p>
            <p className={s.hotelBlockPrice}>
              PRICE: ₴ {price}/Night
            </p>
            <div className={s.hotelBlockGetDiscount}>
              <p className={s.hotelBlockDiscount}>
                PRICE: ₴ {rate}/Night
              </p>
              <Link className={s.button} to={`/apartments/${id}`}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </li>
    </CSSTransition>
  );
}
