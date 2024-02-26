import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import CollapsAbout from '../../Components/CollapseAbout/CollapsAbout';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';
import About1 from '../../Utils/prestation.json';

import './About.scss';

export default function About() {
  return (
    <div className="about">
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />{' '}
      <Banner />
      {About1.map(({ id, text, title }) => (
        <CollapsAbout
          key={id}
          about1Id={id}
          about1Title={title}
          about1Text={text}
        />
      ))}
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />{' '}
    </div>
  );
}
