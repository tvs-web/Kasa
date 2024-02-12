import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Error.scss';
export default function Error() {
  return (
    <div>
      <Header />
      <div className="error">
        <h1 className="number">404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/Kasa" className="return">
          Retouner sur la page d'Accueil
        </a>
      </div>
      <Footer />
    </div>
  );
}
