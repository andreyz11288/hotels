import s from './ModalApp.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

import { getIsAutheticated } from '../../../Redux/Auth/authSelectors';
import { useEffect } from 'react';

const ModalApp = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  useEffect(() => {
    document.addEventListener('click', e => {
      if (
        e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'LABEL' &&
        e.target.tagName !== 'SPAN'
      ) {
        const qq = document.querySelector('#checkMenu');
        if (qq.checked) {
          qq.checked = false;
        }
      }
    });
    return document.removeEventListener('click', e => {
      if (
        e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'LABEL'
      ) {
        var qq = document.querySelector('#checkMenu');
        if (qq.checked) {
          qq.checked = false;
        }
      }
    });
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <input
          type="checkbox"
          id="checkMenu"
          className={s.checkMenu}
        />
        <label className={s.labelCheck} htmlFor="checkMenu">
          <span className={s.spanCheck}>Menu</span>
        </label>
        <div className={s.burgerLineFirst}></div>
        <div className={s.burgerLineSecond}></div>
        <div className={s.burgerLineThird}></div>
        <div className={s.burgerLineFourth}></div>
        <nav className={s.mainMenu}>
          {!isAuthenticated && (
            <NavLink
              exact
              to="/"
              className={s.link}
              activeClassName={s.navLinkactive}
            >
              Home
            </NavLink>
          )}

          {isAuthenticated ? (
            <>
              <NavLink
                to="/apartments"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Apartments
              </NavLink>
              <NavLink
                to="/bestHotels"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Best Hotels
              </NavLink>
              <NavLink
                to="/myCabinet"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                My cabinet
              </NavLink>
              <NavLink
                exact
                to="/team"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Team
              </NavLink>
              <NavLink
                to="#"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                <UserMenu />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                exact
                to="/team"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Team
              </NavLink>
              <NavLink
                to="/login"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </>
  );
};
export default ModalApp;
