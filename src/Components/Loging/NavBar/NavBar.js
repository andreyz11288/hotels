import React from 'react';
import { getIsAutheticated } from '../../../Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

function NavBar() {
  const isLoggedIn = useSelector(getIsAutheticated);

  return (
    <>
      <ul className={s.navBarUl}>
        {!isLoggedIn && (
          <li className={s.navBarLi}>
            <NavLink
              exact
              to="/"
              className={s.navBarLink}
              activeClassName={s.navBarLinkactive}
            >
              Home
            </NavLink>
          </li>
        )}

        {isLoggedIn && (
          <>
            <li className={s.navBarLi}>
              <NavLink
                to="/apartments"
                className={s.navBarLink}
                activeClassName={s.navBarLinkactive}
              >
                Apartments
              </NavLink>
            </li>
            <li className={s.navBarLi}>
              <NavLink
                to="/bestHotels"
                className={s.navBarLink}
                activeClassName={s.navBarLinkactive}
              >
                Best Hotels
              </NavLink>
            </li>
            <li className={s.navBarLi}>
              <NavLink
                to="/myCabinet"
                className={s.navBarLink}
                activeClassName={s.navBarLinkactive}
              >
                My cabinet
              </NavLink>
            </li>
          </>
        )}
        <li className={s.navBarLi}>
          <NavLink
            to="/team"
            className={s.navBarLink}
            activeClassName={s.navBarLinkactive}
          >
            Team
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
