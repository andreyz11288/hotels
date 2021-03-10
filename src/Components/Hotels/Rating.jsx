import styles from './Hotels.module.scss';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default function HalfRating({ rating }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={styles.ratingContainer}>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          readOnly
        />
      </div>
    </div>
  );
}
