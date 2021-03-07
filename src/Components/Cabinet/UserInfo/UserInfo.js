import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  getUserEmail,
  getUserName,
} from '../../../Redux/Auth/authSelectors';
import styles from './UserInfo.module.scss';

export default function UserInfo() {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  return (
    <CSSTransition
      appear={true}
      in
      timeout={750}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.infoBlock}>
        <div className={styles.imageWrapper}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU"
            alt="profile"
            className={styles.image}
          />
        </div>
        <div className={styles.description}>
          <h2>{userName}</h2>
          <h3>{userEmail}</h3>
        </div>
      </div>
    </CSSTransition>
  );
}
