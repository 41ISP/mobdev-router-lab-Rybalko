
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/AboutPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/SearchPage.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='contacts' element={<ContactsPage/>} />
          <Route path='movies' element={<MoviesPage/>} />
          <Route path='movies/:id' element={<MoviePage/>} />
          <Route path='search' element={<SearchPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </>
  );
}
