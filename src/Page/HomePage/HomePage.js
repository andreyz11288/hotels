import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated } from '../../Redux/Auth/authSelectors';
import s from './HomePage.module.css';
import Hotels from '../../Components/Hotels/Hotels';

const HomePage = () => {
  const isLogin = useSelector(getIsAutheticated);
  return (
    <>
      {/* <Hotels /> */}
      {!isLogin ? (
        <div className={s.div}>
          <p className={s.p}>
            Пожалуйста &nbsp;
            <NavLink className={s.navLogo} to="/login">
              авторизируйтесь
            </NavLink>
            &nbsp; или &nbsp;
            <NavLink className={s.navReg} to="/register">
              {' '}
              зарегистрируйтесь{' '}
            </NavLink>
            .
          </p>
        </div>
      ) : (
        <Hotels />
      )}
    </>
  );
};

export default HomePage;
