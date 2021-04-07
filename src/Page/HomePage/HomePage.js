import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { getIsAutheticated } from '../../Redux/Auth/authSelectors';
import { ToastContainer, toast } from 'react-toastify';
import s from './HomePage.module.scss';

const HomePage = () => {
  const isLogin = useSelector(getIsAutheticated) || false;

  useEffect(() => {
    if (!isLogin) {
      const notify = () =>
        toast.warn(
          '🦄 You can log into default account with email: "example@example.com" and password: "example" ',
          {
            position: 'top-right',
            autoClose: 25000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
      notify();
    }
  }, [isLogin]);

  return (
    <section>
      <ToastContainer />

      <div className={s.bacground}></div>
      <div className={s.overley}></div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <div className={s.heroBlockText}>
          <p className={s.smallText}>
            ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY
            EXPERIENCE!
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
                  register
                </NavLink>
                .
              </p>
            </div>
          )}
        </div>
      </CSSTransition>
    </section>
  );
};

export default HomePage;
