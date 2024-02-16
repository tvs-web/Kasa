import React from 'react';
import './Error404.scss';

function Error404() {
  return (
    <div className="error">
      <h1 className="number">404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/Kasa" className="return">
        Retouner sur la page d'Accueil
      </a>
    </div>
  );
}

export default Error404;
