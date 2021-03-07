import s from './UserMenu.module.scss';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logOutAuth } from '../../../Redux/Auth/authOperation';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logOutAuth());
  }, [dispatch]);

  return (
    <div className={s.exitLinck}>
      <NavLink
        to="/"
        className={s.navLink}
        activeClassName={s.navLinkactive}
        onClick={() => {
          onLogout();
        }}
      >
        Exit
      </NavLink>
    </div>
  );
};

export default UserMenu;
