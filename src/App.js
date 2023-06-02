import './App.css';
import AboutUs from './sections/AboutUs';
import CustomCarousel from './sections/CustomCarousel';
import Footer from './sections/Footer';
import Header from './sections/Header';
import HotProducts from './sections/HotProducts';
import IconContactWS from './sections/IconContactWS';
import { MenuHeader } from './sections/MenuHeader';
import OurClients from './sections/OurClients';

function App() {
  return (
    <>
      <IconContactWS />
      <Header />
      <MenuHeader />
      <CustomCarousel />
      <HotProducts />
      <AboutUs />
      <OurClients />
      <Footer />
    </>
  );
}

export default App;
