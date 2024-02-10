import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import './Header.scss';

export default function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className="header">
      <img src={Logo} alt="kasa" />
      <nav className="nav">
        <ul className="list">
          <li className={pathname === '/Kasa' ? 'underlined' : ''}>
            <Link to="/Kasa">Accueil</Link>
          </li>
          <li className={pathname === '/About' ? 'underlined' : ''}>
            <Link to="/About">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
