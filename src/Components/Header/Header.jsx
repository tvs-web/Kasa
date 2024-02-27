import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
  const { pathname } = useLocation();
  console.log(pathname);
  const { headerLogo, headerAlt, headerNav1, headerNav2 } = props;
  return (
    <header className="header">
      <img src={headerLogo} alt={headerAlt} />
      <nav className="nav">
        <ul className="list">
          <li className={pathname === '/kasa' ? 'underlined' : ''}>
            <Link to="/kasa">{headerNav1} </Link>
          </li>
          <li className={pathname === '/about' ? 'underlined' : ''}>
            <Link to="/about">{headerNav2} </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
