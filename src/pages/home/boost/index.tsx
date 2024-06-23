import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Boost.module.scss';

const Home = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href='/home' className={styles.back}>
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 0.113249V5.88675L0 3ZM12 3.5H4.5V2.5H12V3.5Z" fill="white" />
            </svg>
            Назад
          </Link>
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
      </header>
      <main className={styles.content}>
        <h3 className={styles.title}>Доступные бусты</h3>
        <div className={styles.list}>
          <div className={styles.item}>

          </div>
          <div className={styles.item}>
            
          </div>
          <div className={styles.item}>
            
          </div>
          <div className={styles.item}>
            
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;