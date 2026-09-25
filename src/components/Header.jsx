import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); }
    function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
    navigate ('/search?q=' + encodeURIComponent(e.target.value.trim()))
      e.target.value = '';
    }
  }
  

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav">
          <NavLink className={({isActive}) => `nav-link${ isActive ? ' active' : ''}`} to="/" label="Главная">Главная</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? ' active' : ''}`} to="/movies" label="Фильмы">Фильмы</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? ' active' : ''}`} to="/about" label="О проекте">О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов" onKeyDown={handleSearchKeyDown}
          />
        </form>
      </div>
    </header>
  );
}
