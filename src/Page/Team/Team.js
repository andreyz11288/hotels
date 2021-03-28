import React from 'react';
import LazyLoad from 'react-lazy-load';
import ScrollUp from '../../Components/ScrollUp';
import Vova from '../../img/Buzinov.jpg';
import Denis from '../../img/Svinkovskiy.jpg';
import Galya from '../../img/Travinska.jpg';
import Andrey from '../../img/Zatochniy.jpg';
import Dima from '../../img/Galochkin3.jpg';
import sprite from '../../img/sprite.svg';

import s from './Team.module.scss';

export default function Team() {
  return (
    <>
      <section className={s.team}>
        <ul className={s.teamList}>
          <li className={s.teamItem}>
            <div className={s.teamImgBlock}>
              <LazyLoad
                height="100%"
                offsetTop={300}
                debounce={false}
              >
                <img
                  src={Vova}
                  alt="participant"
                  className={s.teamImg}
                />
              </LazyLoad>
            </div>
            <div className={s.teamContent}>
              <div>
                <h2 className={s.teamTitle}>Vova Buzinov</h2>
                <h3 className={s.teamPosition}>TeamLead</h3>
              </div>
              <div>
                <p className={s.teamDescription}>Worked on:</p>
                <p className={s.teamDescription}>- apartments page</p>
                <p className={s.teamDescription}>- filters</p>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/volodymyr-buzinov-b399741bb"
                  target="blank"
                >
                  <svg className={s.teamIcon}>
                    <use href={sprite + '#icon-linkedin-1'} />
                  </svg>
                </a>
              </div>
            </div>
          </li>
          <li className={s.teamItem}>
            <div className={s.teamImgBlock}>
              <LazyLoad
                height="100%"
                offsetTop={300}
                debounce={false}
              >
                <img
                  src={Andrey}
                  alt="participant"
                  className={s.teamImg}
                />
              </LazyLoad>
            </div>
            <div className={s.teamContent}>
              <h2 className={s.teamTitle}>Andrey Zatochniy</h2>
              <p className={s.teamDescription}>Worked on:</p>
              <p className={s.teamDescription}>- header</p>
              <p className={s.teamDescription}>- routing</p>
              <p className={s.teamDescription}>- registration</p>
              <p className={s.teamDescription}>- log in</p>
              <a
                href="https://www.linkedin.com/in/андрей-заточный-37ba46120"
                target="blank"
              >
                <svg className={s.teamIcon}>
                  <use href={sprite + '#icon-linkedin-1'} />
                </svg>
              </a>
            </div>
          </li>
          <li className={s.teamItem}>
            <div className={s.teamImgBlock}>
              <LazyLoad
                height="100%"
                offsetTop={300}
                debounce={false}
              >
                <img
                  src={Denis}
                  alt="participant"
                  className={s.teamImg}
                />
              </LazyLoad>
            </div>
            <div className={s.teamContent}>
              <h2 className={s.teamTitle}>Denis Svinkowskiy</h2>
              <p className={s.teamDescription}>Worked on:</p>
              <p className={s.teamDescription}>- my cabinet</p>
              <a
                href="https://www.linkedin.com/in/denis-svinkovskiy-a4043a200/"
                target="blank"
              >
                <svg className={s.teamIcon}>
                  <use href={sprite + '#icon-linkedin-1'} />
                </svg>
              </a>
            </div>
          </li>
          <li className={s.teamItem}>
            <div className={s.teamImgBlock}>
              <LazyLoad
                height="100%"
                offsetTop={300}
                debounce={false}
              >
                <img
                  src={Galya}
                  alt="participant"
                  className={s.teamImg}
                />
              </LazyLoad>
            </div>
            <div className={s.teamContent}>
              <h2 className={s.teamTitle}>Halyna Travinska</h2>
              <p className={s.teamDescription}>Worked on:</p>
              <p className={s.teamDescription}>- best hotels</p>
              <p className={s.teamDescription}>- footer</p>
              <p className={s.teamDescription}>- teams page</p>
              <a
                href="https://www.linkedin.com/in/galinka-travinska-a7055b200/"
                target="blank"
              >
                <svg className={s.teamIcon}>
                  <use href={sprite + '#icon-linkedin-1'} />
                </svg>
              </a>
            </div>
          </li>

          <li className={s.teamItem}>
            <div className={s.teamImgBlock}>
              <LazyLoad
                height="100%"
                offsetTop={300}
                debounce={false}
              >
                <img
                  src={Dima}
                  alt="participant"
                  className={s.teamImg}
                />
              </LazyLoad>
            </div>
            <div className={s.teamContent}>
              <h2 className={s.teamTitle}>Dmitriy Galochkin</h2>
              <p className={s.teamDescription}>Worked on</p>
              <p className={s.teamDescription}>- apartment details</p>
              <a
                href="https://www.linkedin.com/in/дмитрий-галочкин-6668121ab/"
                target="blank"
              >
                <svg className={s.teamIcon}>
                  <use href={sprite + '#icon-linkedin-1'} />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <ScrollUp />
    </>
  );
}
