import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Error from '../Error/Error';
import Data from '../../Utils/data.json';
import Caroussel from '../../Components/Caroussel/Caroussel';
import './apartments.scss';
export default function Apartments() {
  const { id } = useParams();
  const cardsId = Data.find((data) => data.id === id);
  if (!cardsId) {
    return <Error />;
  }
  return (
    <div>
      <Header />
      <Caroussel />
      {/* <Description /> */}
      <Footer />
    </div>
  );
}
// <Caroussel id={id} />;
