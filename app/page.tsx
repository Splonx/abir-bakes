import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Order from '../components/Order';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="luxury-page-bg">
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
