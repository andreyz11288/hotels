import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Hotels.module.scss';
import actions from '../../Redux/Hotels/HotelsActions/hotelsActions';
import operations from '../../Redux/Hotels/HotelsOperations/hotelsOperations';
import selectors from '../../Redux/Hotels/HotelsSelectors/hotelsSelectors';
import { CSSTransition } from 'react-transition-group';

export default function Filter() {
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [cities, setCities] = useState([]);
  const selector = useSelector(selectors.getCities);

  const getCity = evt => {
    setCity(evt.target.value);
  };
  const getPrice = evt => {
    setPrice(evt.target.value);
  };
  const dispatch = useDispatch();

  const getAllCities = () => {
    setCities(selector);
    const section = document.getElementById('section');    
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    
    if (mediaQuery.matches) {
      section.style.paddingTop = '200px';      
    }    
  };
  const pushCity = evt => {
    setCity(evt.target.textContent);
  };
  useEffect(() => {
    dispatch(actions.actionFilter({ city, price }));
  }, [city, dispatch, price]);
  useEffect(() => {
    dispatch(operations.getAllCities());
  }, [dispatch]);
  return (
    <>
      <div className={styles.filterContainer}>
        <ul className={styles.filterContainerList}>
          {cities.map(city => {
            return (
              <CSSTransition
                key={city}
                in={true}
                appear={true}
                timeout={500}
                classNames={styles}
                unmountOnExit
              >
                <li>
                  <button onClick={pushCity}>{city}</button>
                </li>
              </CSSTransition>
            );
          })}
        </ul>
        <label className={styles.filterContainerLabel}>
          <span>Choose city</span>
          <input
            type="text"
            name="city"
            defaultValue={city}
            onChange={getCity}
            onFocus={getAllCities}
          />
        </label>
        <label className={styles.filterContainerLabel}>
          <span>Choose start price</span>
          <input
            type="text"
            name="price"
            defaultValue={price}
            onChange={getPrice}
          />
        </label>
      </div>
    </>
  );
}
