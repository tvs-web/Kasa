import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Error404 from '../../Components/Error404/Error404';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';

export default function Error() {
  return (
    <div>
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />
      <Error404
        errorCode={404}
        errorMessage="Oups! La page que vous demandez n'existe pas."
        errorRedirect="Retouner sur la page d'Accueil"
      />
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />
    </div>
  );
}
