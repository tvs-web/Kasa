import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.scss';
// import '../../assets/Image source 1.png';
// import '../../assets/Image source 2.png';
export default function Banner() {
  const { pathname } = useLocation();
  return (
    <div className="banner">
      <div className={pathname === '/Kasa' ? 'kasa' : 'about'}>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
}
