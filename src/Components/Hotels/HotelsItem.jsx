import { Link } from 'react-router-dom';
import styles from './Hotels.module.scss';
import Rating from './Rating';
import selectors from '../../Redux/Hotels/HotelsSelectors/hotelsSelectors';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import { CSSTransition } from 'react-transition-group';

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
          <CSSTransition
            key={id}
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}
            unmountOnExit
          >
            <li className={styles.hotelsListItem} key={id}>
              <div className={styles.hotelsListItemImageContainer}>
                <LazyLoad height="100%" offsetTop={200}>
                  <img
                    className={styles.hotelsListItemImage}
                    src={imgUrl}
                    alt="room"
                    height="300"
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
                    to={`/apartments/${id}`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </li>
          </CSSTransition>
        );
      })}
    </>
  );
}
