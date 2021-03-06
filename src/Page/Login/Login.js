import React, { useState } from 'react';
import s from './Login.module.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../Redux/Auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
// const notify = () => toast.error('incorrect username or password!');

const Login = () => {
  const dispatch = useDispatch();
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
