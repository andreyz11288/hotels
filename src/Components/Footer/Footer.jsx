import React from 'react';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.textContent}>
        <p className={s.content}>
          Want to keep up with the best deals?
        </p>
      </div>
      <div className={s.subscription}>
        <input
          type="email"
          placeholder="Email"
          className={s.entryField}
        />
        <button type="submit" className={s.subscribeButton}>Subscribe</button>
      </div>
    </div>
  );
}
