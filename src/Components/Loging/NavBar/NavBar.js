import React from 'react';
import { getIsAutheticated } from '../../../Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

function NavBar() {
  const isLoggedIn = useSelector(getIsAutheticated);

  return (
    <>
      <ul className={s.ul}>
        <li className={s.li}>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.navLinkactive}
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <>
            <li className={s.li}>
              <NavLink
                to="/bestHotels"
                className={s.navLink}
                activeClassName={s.navLinkactive}
              >
                Best Hotels
              </NavLink>
            </li>
            <li className={s.li}>
              <NavLink
                to="/myCabinet"
                className={s.navLink}
                activeClassName={s.navLinkactive}
              >
                My cabinet
              </NavLink>
            </li>
          </>
        )}
        <li className={s.li}>
          <NavLink
            exact
            to="/team"
            className={s.navLink}
            activeClassName={s.navLinkactive}
          >
            Team
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
