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
import CollapseApartments from '../../Components/CollapseApartments/CollapseApartments';

export default function Apartments() {
  const { id } = useParams();
  const item = Data.find((data) => data.id === id) || {};
  if (!item) {
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
      <Caroussel pictures={item.pictures} />
      <Description
        title={item.title}
        host={item.host}
        location={item.location}
        rating={item.rating}
        tags={item.tags}
      />
      <CollapseApartments
        key={id}
        collapseId={id}
        description={item.description}
        equipments={item.equipments}
      />
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />
    </div>
  );
}
// <Caroussel id={id} />;
