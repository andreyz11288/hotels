import React, { useEffect } from 'react';
import selectors from '../../Redux/Hotels/HotelsSelectors/hotelsSelectors.jsx';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../Redux/ApartmentsDetails/apartmentsDetailsOperation';
import styles from '../ApartmentsDetails/ApartmentsDetails.module.scss';
import Rating from '../../Components/ApartmentsDetails/Rating';

export default function ApartmentsDetails(props) {
  const apartmentsById = useSelector(selectors.getApartmentsDetails);
  console.log(apartmentsById);

  const dispatch = useDispatch();
  useEffect(() => {
    const getApartmentsDetails = () =>
      dispatch(
        operations.getApartmentsDetails(props.match.params.id),
      );
    getApartmentsDetails();
  }, [dispatch, props.match.params.id]);

  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <h2>{apartmentsById.title}</h2>
        <Rating />
        <img className={styles.img} src={apartmentsById.imgUrl} />
        <p>{apartmentsById.descr}</p>
        <button className={styles.button}>Book now</button>
      </div>
      <div className={styles.reviews_container}>
        <span className={styles.reviews_title}>Reviews:</span>
        <textarea
          placeholder="enter your review"
          name="text_comments"
          cols="60"
          rows="5"
          className={styles.textarea}
        ></textarea>

        <ul className={styles.list}>
          {apartmentsById.reviews &&
            apartmentsById.reviews.map(review => {
              const { content, id, author } = review;
              return (
                <li className={styles.list_item} key={id}>
                  <p className={styles.review_author}>{author}:</p>
                  <span className={styles.review_content}>
                    {content}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
