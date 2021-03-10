import { useEffect, useState } from 'react';
import styles from './Hotels.module.scss';
import { v4 as uuidv4 } from 'uuid';

const emtyStar =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png';
const Star =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/754px-Star_full.svg.png';

export default function Rating({ rating }) {
  const [stars, setStars] = useState([
    emtyStar,
    emtyStar,
    emtyStar,
    emtyStar,
    emtyStar,
  ]);

  useEffect(() => {
    const ratedStars = stars.slice(rating);
    if (rating === 1) {
      setStars([Star, ...ratedStars]);
    }
    if (rating === 2) {
      setStars([Star, Star, ...ratedStars]);
    }
    if (rating === 3) {
      setStars([Star, Star, Star, ...ratedStars]);
    }
    if (rating === 4) {
      setStars([Star, Star, Star, Star, ...ratedStars]);
    }
    if (rating === 5) {
      setStars([Star, Star, Star, Star, Star]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.starContainer}>
      {stars.map(star => {
        return (
          <li key={uuidv4()}>
            <img src={star} alt="Empty Star" />
          </li>
        );
      })}
    </ul>
  );
}
