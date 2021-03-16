import React from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.scss';

function Rating({ rating, limit }) {
  const coloredRatingWidth = (rating / limit) * 100 + '%';
  let emptyStarsList = [];
  let coloredStarsList = [];

  for (let i = 0; i < limit; i++) {
    emptyStarsList.push(
      <img
        key={i}
        className={styles.star}
        src="../../../public/star-empty.svg"
        alt=""
      />,
    );
    coloredStarsList.push(
      <img
        key={i}
        className={styles.star}
        src="../../../public/star-yellow.svg"
        alt=""
      />,
    );
  }

  const EmptyStars = () => emptyStarsList;
  const ColoredStars = () => coloredStarsList;

  return (
    <div className={styles.rating}>
      {/* <img src={svgPath} alt="" /> */}
      <div className={styles.emptyStars}>
        <EmptyStars />
        <div
          className={styles.coloredStars}
          style={{ width: coloredRatingWidth }}
        >
          <ColoredStars />
        </div>
      </div>
    </div>
  );
}

Rating.defaultProps = {
  limit: 5,
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  limit: PropTypes.number,
};

export default Rating;
