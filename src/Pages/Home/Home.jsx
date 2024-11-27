import '../../App.css';
import Contact from '../../Components/Contact/Contact';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/NaviationBar/Navbar';
import Category from '../../Components/Category/Category'
import Featured from '../../Components/Featured/Featured'
import Infoblock from '../../Components/Infoblock/Infoblock'
import Best from '../../Components/Best/Best'
import Footer from '../../Components/Footer/Footer'
// images
import brand1 from '../../Assets/images/brand-1.png'
import brand2 from '../../Assets/images/brand-2.png'
import brand3 from '../../Assets/images/brand-3.png'
import brand4 from '../../Assets/images/brand-4.png'
import brand5 from '../../Assets/images/brand-5.png'

function Home() {
  return (
    <div className="App bg-orange-400 max-w-[1920px] w-full mx-auto">
      
      <Hero title={"A pet store with everything you need"}/>
      <Category />
      <Featured />
      <Infoblock />

      <div className="max-w-7xl m-auto  flex justify-between py-[60px]">
        <div className="brand1">
          <img src={brand1} alt="" />
        </div>
        <div className="brand2">
          <img src={brand2} alt="" />
        </div>
        <div className="brand3">
          <img src={brand3} alt="" />
        </div>
        <div className="brand4">
          <img src={brand4} alt="" />
        </div>
        <div className="brand5">
          <img src={brand5} alt="" />
        </div>
      </div>
      <Best />
    </div>
  );
}

export default Home;
