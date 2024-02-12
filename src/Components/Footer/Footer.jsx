import React from 'react';
import './Footer.scss';
import Logow from '../../assets/.LOGOwhite.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logow} alt="kasa" />
      <p className="comment">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
