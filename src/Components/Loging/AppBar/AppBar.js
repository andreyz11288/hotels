import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { getIsAutheticated } from '../../../Redux/Auth/authSelectors';


export const AppBar = () => {
  const isAuthenticated = useSelector(getIsAutheticated);

  return (
    <header >
     <nav className={s.nav}> <NavBar />
      {isAuthenticated ? <UserMenu /> : <Navigation />}</nav>
    </header>
  );
};

export default AppBar;
