import React, { useState } from 'react';
import s from './Login.module.scss';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../Redux/Auth/authOperation';
import { getWaiting } from '../../Redux/Auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from 'react-transition-group';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Login = () => {
  const dispatch = useDispatch();
  const wait = useSelector(getWaiting);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(loginAuth({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.sectionLogin}>
      <div className={s.bacground}></div>
      <div className={s.overley}></div>
      <ToastContainer />
      <CSSTransition
        in={wait}
        classNames="waitingMessage"
        timeout={250}
        unmountOnExit
      >
        <Loader className={s.waitingMessage}          
         type="Audio" color="#FFF" height={80} width={80}
      />
      
      </CSSTransition>
      <div className={s.containerLogin}>
        <h1 className={s.loginH1}>Login</h1>
        <form className={s.loginForm} onSubmit={btnClick}>
          <label className={s.loginLabel}>
            <span>Email</span>            
            <input
              required
              className={s.loginInput}
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={emailFunc}
            />
          </label>

          <label className={s.loginLabel}>
            <span>Password</span>            
            <input
              required
              className={s.loginInput}
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={passwordFunc}
            />
          </label>
          <br />
          <button type="submit" className={s.loginButton}>
           Login           
          </button>
        </form>
        <p className={s.loginP}>
          No account yet? &nbsp;
          <NavLink
            exact
            to="/register"
            className={s.loginNavLink}
            activeClassName={s.loginNavLinkactive}
          >
            Registration
          </NavLink>
        </p>
      </div>
    </section>
  );
  // }
};

export default Login;
