import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/modules/Home.module.scss';

const Home = () => {
  const [activeLevel, setActiveLevel] = useState(1);

  const handleLevelClick = (level: number) => {
    setActiveLevel(level);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img draggable='false' src="/avatar.png" alt="avatar" />
          </div>
        </div>
        <div className={styles.bot}>
          <div className={styles.left}>
            <p className={styles.text}>Hello, activist!</p>
            <p className={styles.name}>@amirimbeer</p>
          </div>
          <div className={styles.right}>
            <div className={styles.perHour}>+300/час</div>
            <div className={styles.coins}>
              104
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 36C27.3888 36 35 28.3888 35 19C35 9.61116 27.3888 2 18 2C8.61116 2 1 9.61116 1 19C1 28.3888 8.61116 36 18 36Z" fill="#F4900C" />
                <path d="M18 34C27.3888 34 35 26.3888 35 17C35 7.61116 27.3888 0 18 0C8.61116 0 1 7.61116 1 17C1 26.3888 8.61116 34 18 34Z" fill="#FFCC4D" />
                <path d="M18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32Z" fill="#FFE8B6" />
                <path d="M18 31C25.732 31 32 24.732 32 17C32 9.26801 25.732 3 18 3C10.268 3 4 9.26801 4 17C4 24.732 10.268 31 18 31Z" fill="#FFAC33" />
                <path d="M22.75 15C16 16.5 14.425 21.1275 12.865 25.005L14.2825 25.5L14.995 23.775C15.355 23.9025 15.73 24 16 24C24.25 24 26.5 11.25 26.5 11.25C25.75 12.75 20.5 12.9375 16.75 13.6875C13 14.4375 11.5 17.625 11.5 19.125C11.5 20.625 12.8125 21.9375 12.8125 21.9375C15.25 15 22.75 15 22.75 15Z" fill="#F4900C" />
                <path d="M22.75 14C16 15.5 14.425 20.1275 12.865 24.005L14.2825 24.5L14.995 22.775C15.355 22.9025 15.73 23 16 23C24.25 23 26.5 10.25 26.5 10.25C25.75 11.75 20.5 11.9375 16.75 12.6875C13 13.4375 11.5 16.625 11.5 18.125C11.5 19.625 12.8125 20.9375 12.8125 20.9375C15.25 14 22.75 14 22.75 14Z" fill="#FFD983" />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <Link href='/home/boost' className={styles.boost}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.00033 12.6997L5.31699 12.1664C5.20588 11.8442 5.10321 11.5164 5.00899 11.1831C4.91477 10.8497 4.83966 10.5164 4.78366 10.1831L4.00033 10.7164V12.6997ZM6.66699 11.9997H9.33366C9.53366 11.5553 9.69477 11.0137 9.81699 10.3751C9.93921 9.73641 10.0003 9.08352 10.0003 8.41641C10.0003 7.31641 9.81699 6.27485 9.45033 5.29174C9.08366 4.30863 8.60033 3.55018 8.00033 3.01641C7.40033 3.54974 6.91699 4.30818 6.55033 5.29174C6.18366 6.2753 6.00033 7.31685 6.00033 8.41641C6.00033 9.08307 6.06144 9.73596 6.18366 10.3751C6.30588 11.0142 6.46699 11.5557 6.66699 11.9997ZM8.00033 8.66641C7.63366 8.66641 7.31988 8.53596 7.05899 8.27507C6.7981 8.01418 6.66744 7.70018 6.66699 7.33307C6.66655 6.96596 6.79721 6.65218 7.05899 6.39174C7.32077 6.1313 7.63455 6.00063 8.00033 5.99974C8.3661 5.99885 8.6801 6.12952 8.94233 6.39174C9.20455 6.65396 9.33499 6.96774 9.33366 7.33307C9.33232 7.69841 9.20188 8.01241 8.94233 8.27507C8.68277 8.53774 8.36877 8.66818 8.00033 8.66641ZM12.0003 12.6997V10.7164L11.217 10.1831C11.1614 10.5164 11.0865 10.8497 10.9923 11.1831C10.8981 11.5164 10.7952 11.8442 10.6837 12.1664L12.0003 12.6997ZM8.00033 1.31641C9.10033 2.11641 9.93099 3.13307 10.4923 4.36641C11.0537 5.59974 11.3341 7.03307 11.3337 8.66641L12.7337 9.59974C12.9225 9.72196 13.0699 9.88307 13.1757 10.0831C13.2814 10.2831 13.3341 10.4942 13.3337 10.7164V14.6664L10.017 13.3331H5.98366L2.66699 14.6664V10.7164C2.66699 10.4942 2.71988 10.2831 2.82566 10.0831C2.93144 9.88307 3.07855 9.72196 3.26699 9.59974L4.66699 8.66641C4.66699 7.03307 4.94766 5.59974 5.50899 4.36641C6.07032 3.13307 6.90077 2.11641 8.00033 1.31641Z" fill="#FFCC4D" />
          </svg>
          Дать буст
        </Link>
        <button type='button' className={styles.button}>
          <img draggable='false' src="/coin/main.svg" className={styles.main} alt="" />
        </button>
        <p className={styles.desc}>Кликай на кислород</p>
        <div className={styles.lvls}>
          {[1, 2, 3, 4].map((level) => (
            <button
              key={level}
              type="button"
              className={`${styles.lvl} ${activeLevel === level ? styles.active : ''}`}
              onClick={() => handleLevelClick(level)}
            >
              <img draggable='false' src="/coin/main.svg" alt="" />
              <p className={styles.title}>LVL {level}</p>
              <p className={styles.subtitle}>+3/тап</p>
            </button>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;