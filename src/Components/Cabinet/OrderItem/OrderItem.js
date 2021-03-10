import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './OrderItem.module.scss';
import { cabinetOperations } from '../../../Redux/Cabinet';
import Rating from '@material-ui/lab/Rating';

export default function OrderItem({ order }) {
  const dispatch = useDispatch();
  const { id, date, apartment } = order;
  const { title, imgUrl, price, location, rating } = apartment;
  const currentDate = date.split('T')[0];
  return (
    <li className={styles.orderItem}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt={title} className={styles.img} />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <h3 className={styles.descriptionItem}>{location.city}</h3>
          <p className={styles.descriptionItem}>{title}</p>
          <Rating name="read-only" value={rating} readOnly />
          <p className={styles.descriptionItem}>
            Ordered at {currentDate}
          </p>
          <div className={styles.buttonInner}>
            <span className={styles.descriptionItem}>
              PRICE: ₴ {price}/NIGHT
            </span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() =>
                dispatch(cabinetOperations.deleteOrder(id))
              }
            >
              DELETE THE ORDER
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
