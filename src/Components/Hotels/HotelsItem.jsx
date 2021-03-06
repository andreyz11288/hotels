import { Link } from 'react-router-dom';
import styles from './Hotels.module.scss';
import Rating from './Rating';
import selectors from '../../Redux/Hotels/HotelsSelectors/hotelsSelectors';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazy-load';
export default function HotelsItem() {
  const visibleApartments = useSelector(
    selectors.getVisibleApartments,
  );
  return (
    <>
      {visibleApartments.map(apartment => {
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
              <LazyLoad height="100%" offsetVertical={50}>
                <img
                  className={styles.hotelsListItemImage}
                  src={imgUrl}
                  alt="room"
                />
              </LazyLoad>
            </div>

            <div className={styles.ItemInner}>
              <h3>{location.city}</h3>
              <p>{title}</p>
              <p>
                Rating: <Rating rating={rating} />
              </p>
              <div className={styles.buttonInner}>
                <p>Price: ₴ {price}/Night</p>
                <Link
                  className={styles.button}
                  to={{ pathname:`/apartments/${id}`}}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
