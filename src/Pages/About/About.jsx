import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import CollapsAbout from '../../Components/CollapseAbout/CollapsAbout';
import './About.scss';

export default function About() {
  return (
    <div className="about">
      <Header />
      <Banner />
      <CollapsAbout />
      <Footer />
    </div>
  );
}
