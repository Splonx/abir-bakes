import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Order from '../components/Order';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Order />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
