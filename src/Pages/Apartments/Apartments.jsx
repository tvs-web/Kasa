import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Error from '../Error/Error';
import Data from '../../Utils/data.json';
import Caroussel from '../../Components/Caroussel/Caroussel';
import Description from '../../Components/Description/Description';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';
import './apartments.scss';

export default function Apartments() {
  const { id } = useParams();
  const cardsId = Data.find((data) => data.id === id);
  if (!cardsId) {
    return <Error />;
  }
  return (
    <div className="apartments">
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />{' '}
      <Caroussel />
      <Description />
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />{' '}
    </div>
  );
}
// <Caroussel id={id} />;
