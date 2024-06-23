import NavBar from '../NavBar';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
        <main className={styles.main}>
          {children}
        </main>
        <NavBar />
      </div>
    </>
  );
};

export default Layout;