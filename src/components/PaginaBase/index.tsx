import Menu from 'components/Menu';
import styles from './PaginaBase.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaBase(){
  return(
    <>
      <Menu />
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
}