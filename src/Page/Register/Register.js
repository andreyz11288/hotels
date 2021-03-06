import React, { useState } from 'react';
import s from './Register.module.scss';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../../Redux/Auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const dispftch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispftch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      <div className={s.bacground}></div>
      <div className={s.overley}></div>
      <ToastContainer />
      <h1 className={s.registerH1}>Register</h1>
      <form className={s.registerForm} onSubmit={btnClick}>
        <label className={s.registerLabel}>
          Login
          <input
            className={s.registerInput}
            type="text"
            value={name}
            placeholder="Enter login"
            onChange={nameFunc}
          />
        </label>

        <label className={s.registerLabel}>
          Email
          <input
            className={s.registerInput}
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={emailFunc}
          />
        </label>

        <label className={s.registerLabel}>
          Password
          <input
            className={s.registerInput}
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={passwordFunc}
          />
        </label>
        <br />
        <button type="submit" className={s.registerButton}>
          Register
        </button>
      </form>
    </>
  );
  // }
};

export default Register;
