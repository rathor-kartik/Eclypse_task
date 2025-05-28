
import AboutSection from '../component/Aboutsection';
import Accordion from '../component/Accordion';
import Footer from '../component/Footer';
import HeroSection from '../component/Herosection';
import ImageGrid from '../component/Imagegrid';
import Navbar from '../component/Navbar';
import ProductPage from '../component/Productpage';
import Testimonials from '../component/Testonomial';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <ImageGrid />
      <ProductPage />
      <Accordion />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
