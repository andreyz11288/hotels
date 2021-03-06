import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated } from '../../Redux/Auth/authSelectors';
import s from './HomePage.module.scss';
// import Hotels from '../../Components/Hotels/Hotels';

const HomePage = () => {
  const isLogin = useSelector(getIsAutheticated);
  return (
    <section>
      <div className={s.bacground}></div>
      <div className={s.overley}></div>
      <p className={s.smallText}>
        ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
      </p>
      <h1 className={s.heroText}>Most Relaxing Place</h1>
      {!isLogin && (
        <div className={s.homeLinck}>
          <p className={s.linckLogoReg}>
            Please &nbsp;
            <NavLink className={s.HomePageLogo} to="/login">
              login
            </NavLink>
            &nbsp; or &nbsp;
            <NavLink className={s.HomePageReg} to="/register">
              {' '}
              register{' '}
            </NavLink>
            .
          </p>
        </div>
      )}
    </section>
  );
};

export default HomePage;
