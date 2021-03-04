import React, { useCallback } from 'react';
import s from './UserMenu.module.css';
import {  useDispatch } from 'react-redux';
import { logOutAuth } from '../../../Redux/Auth/authOperation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logOutAuth());
  }, [dispatch]);

  return (
  <div className={s.divUser}>
      <button className={s.button} type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
