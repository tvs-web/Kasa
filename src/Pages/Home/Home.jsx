import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import Footer from '../../Components/Footer/Footer';
import './Home.scss';
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}
