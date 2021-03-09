import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated } from '../../../Redux/Auth/authSelectors';
import ModalApp from './ModalApp';

export const AppBar = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  return (
    <div id="header" className={s.header}>
      {!isAuthenticated ? (
        <NavLink
          exact
          to="/"
          className={s.navLinkLogo}
          activeClassName={s.navLinkactiveLogo}
        >
          <span className={s.logoHotel}>
            Hotels <br />{' '}
            <small className={s.smallLogo}>Hotel Booking</small>
          </span>
        </NavLink>
      ) : (
        <NavLink
          to="/apartments"
          className={s.navLinkLogo}
          activeClassName={s.navLinkactiveLogo}
        >
          <span className={s.logoHotel}>
            Hotels <br />{' '}
            <small className={s.smallLogo}>Hotel Booking</small>
          </span>
        </NavLink>
      )}
      <nav className={s.nav}>
        <ModalApp />
        <div className={s.divNav}>
          <NavBar />
          {isAuthenticated ? <UserMenu /> : <Navigation />}
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
