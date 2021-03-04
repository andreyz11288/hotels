import s from "./ModalApp.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";

import { getIsAutheticated } from "../../../Redux/Auth/authSelectors";

const ModalApp = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  return (
    <>
      <div className={s.wrapper}>
        <input type='checkbox' id='checkMenu' className={s.checkMenu} />
        <label className={s.labelCheck} htmlFor='checkMenu'>
          Menu
        </label>
        <div className={s.burgerLineFirst}></div>
        <div className={s.burgerLineSecond}></div>
        <div className={s.burgerLineThird}></div>
        <div className={s.burgerLineFourth}></div>
        <nav className={s.mainMenu}>
          <NavLink
            exact
            to='/'
            className={s.link}
            activeClassName={s.navLinkactive}
          >
            Home
          </NavLink>
          {isAuthenticated ? (
            <>
              {" "}
              <NavLink
                to='/bestHotels'
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Best Hotels
              </NavLink>
              <NavLink
                to='/myCabinet'
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                My cabinet
              </NavLink>
              <NavLink
                to='#'
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                <UserMenu />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to='/login'
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Войти
              </NavLink>
              <NavLink
                to='/register'
                className={s.link}
                activeClassName={s.navLinkactive}
              >
                Регистрация
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </>
  );
};
export default ModalApp;
