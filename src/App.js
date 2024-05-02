import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyNav from './components/MyNav';
import SixMonth from './components/SixMonth';
import Engineering from './components/Engineering';
import OurProgram from './components/OurProgram';
import Student from './components/Student';
import OurGuarantee from './components/OurGuarantee';
import WhoAreWe from './components/WhoAreWe';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import dog from "./assets/images/webp/dog-img.webp";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  }, [])
  useEffect(() => {
    AOS.init({
      once:true,
      duration:1500,
    });
  }, [])
  return (
    <>
    {loader ? (<div className=' bg-black position-fixed d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 bottom-0 end-0 start-0 z-3'>
        <img src={dog} alt="preloader" width={150} className='anime-bounce' />
        <div className="loader mt-5"></div>
      </div >) : (
    <div>
      <MyNav />
      <SixMonth />
      <Engineering />
      <OurProgram />
      <Student />
      <OurGuarantee />
      <WhoAreWe />
      <Footer />
      <BackToTop />
    </div>)}
    </>
  );
}

export default App;
