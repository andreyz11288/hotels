import React, { useState, useEffect } from 'react';
import selectors from '../../Redux/ApartmentsDetails/apartmentDetailsSelector';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../Redux/ApartmentsDetails/apartmentsDetailsOperation';
import styles from '../ApartmentsDetails/ApartmentsDetails.module.scss';

import 'react-toastify/dist/ReactToastify.css';

export default function ApartmentsDetails(props) {
  const apartmentsById = useSelector(selectors.getApartmentsDetails);
  const reviews = useSelector(selectors.getReviews);
 
 

  const dispatch = useDispatch();
  useEffect(() => {
    const getApartmentsDetails = () =>
      dispatch(
        operations.getApartmentsDetails(props.match.params.id),
      );
    getApartmentsDetails();
  }, [dispatch, props.match.params.id]);

  const curDate = new Date().toLocaleDateString();
  

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [checkBookBtn, setCheckBookBtn] = useState(false);

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };
  const handleContentChange = (evt) => {
    setContent(evt.target.value);
  };
  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(operations.sendReviews(props.match.params.id, {author:name, content, rating:Number(rating)}));
    setName("");
    setContent("");
    setRating('');
  };
  const bookApartmentsSubmit = () => {
    // evt.preventDefault();
    dispatch(operations.bookApartments(props.match.params.id, curDate))
    setCheckBookBtn(true);
  }


  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <h2>{apartmentsById.title}</h2>
        {/* <Rating /> */}
        <img className={styles.img} src={apartmentsById.imgUrl} />
        <p>{apartmentsById.descr}</p>
        <button type='button' disabled={checkBookBtn} onClick={bookApartmentsSubmit} className={styles.button}>Book now</button>
      </div>
      <div className={styles.reviews_container}>
      <h3 className={styles.reviews_title}>Review:</h3>
        

        <ul className={styles.list}>
            {reviews &&
              reviews.map(review => {
                const { content, id, author } = review;
                return (
                  <li className={styles.list_item} key={id}>
                    <p className={styles.review_author}>{author}:</p>
                    <span className={styles.review_content}>
                      {content}
                    </span>
                  </li>
                );
              })
            }
        </ul>

        <h3 className={styles.add_title}>ADD Reviews:</h3>
          <form onSubmit={handleSubmit}> 
          <input className={styles.input} type='text' name='name' value={name} onChange={handleNameChange} placeholder ='Enter your name'></input>
          <textarea
          placeholder="Enter your review"
          name="text_comments"
          cols="60"
          rows="5"
          className={styles.textarea}
          value ={content}
          onChange={handleContentChange}
        ></textarea>
        <input className={styles.input} type='text' name='rating' value={rating} onChange={handleRatingChange} placeholder='Rate us from 1 to 5'></input>
        <button type='submit' className={styles.button} >Send review</button>
        </form>
      </div>
    </div>
  );
}
