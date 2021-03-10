import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cabinetOperations } from '../../Redux/Cabinet';
import OrdersList from '../../Components/Cabinet/OrdersList/OrdersList';
import UserInfo from '../../Components/Cabinet/UserInfo/UserInfo';
import styles from './MyCabinet.module.scss';
import { ToastContainer } from 'react-toastify';

const MyCabinet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cabinetOperations.fetchOrders());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <div className={styles.cabinetContainer}>
        <UserInfo />
        <OrdersList />
      </div>
    </>
  );
};
export default MyCabinet;
