import React from 'react';
import './Footer.scss';

export default function Footer(props) {
  const { footerLogo, footerAlt, footerCopyright } = props;
  return (
    <footer className="footer">
      <img src={footerLogo} alt={footerAlt} />
      <p className="comment">{footerCopyright} </p>
    </footer>
  );
}
