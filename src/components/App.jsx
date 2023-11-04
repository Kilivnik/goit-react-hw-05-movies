import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styles from './App.module.css';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));

export const App = () => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            `${styles['NavLink']} ${isActive ? styles.Active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles['NavLink']} ${isActive ? styles.Active : ''}`
          }
          to="movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </>
  );
};
