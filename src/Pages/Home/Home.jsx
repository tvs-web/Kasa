import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import Footer from '../../Components/Footer/Footer';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';
import './Home.scss';
export default function Home() {
  return (
    <div className="home">
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />{' '}
      <Banner />
      <Gallery />
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />{' '}
    </div>
  );
}
