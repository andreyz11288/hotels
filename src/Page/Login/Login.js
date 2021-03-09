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
        <h2 className={s.waitingMessage}>Please Wait...</h2>
      </CSSTransition>

      <h1 className={s.loginH1}>Login</h1>
      <form className={s.loginForm} onSubmit={btnClick}>
        <label className={s.loginLabel}>
          Email
          <input
            className={s.loginInput}
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={emailFunc}
          />
        </label>

        <label className={s.loginLabel}>
          Password
          <input
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
          Register
        </NavLink>
      </p>
    </section>
  );
  // }
};

export default Login;
