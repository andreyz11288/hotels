import styles from './Hotels.module.scss';
import LazyLoad from 'react-lazyload';

export default function HotelsItem({ apartments }) {
  return (
    <>
      {apartments.map(apartment => {
        const {
          id,
          imgUrl,
          location,
          price,
          rating,
          title,
        } = apartment;
        return (
          <li className={styles.hotelsListItem} key={id}>
            <div className={styles.hotelsListItemImageContainer}>
              <img
                className={styles.hotelsListItemImage}
                src={imgUrl}
                alt="room"
              />
            </div>

            <div className={styles.ItemInner}>
              <h3>{location.city}</h3>
              <p>{title}</p>
              <p>Rating: {rating}</p>
              <div className={styles.buttonInner}>
                <span>Price: ₴ {price}/Night</span>
                <button>Book Now</button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
