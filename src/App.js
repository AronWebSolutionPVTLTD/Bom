import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
import About from './component/About';
import Features from './component/Features';
import FooterBox from './component/Footer';
import Faqs from './component/Faqs';
import PrivateSales from './component/PrivateSales';
import TokenSale from './component/TokenSale';
import HomeSlider from './component/HomeSlider';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Timeline from './component/Timeline';
import OurTeam from './component/OurTeam';

// import PrivateSales from './component/PrivateSales';

// >>>>>>> main
function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <HomeSlider></HomeSlider>
      <Vision></Vision>
      <BuyBom></BuyBom>
      <About></About>
      <UniqueNFT></UniqueNFT>
      
      <Features></Features>
      <PrivateSales></PrivateSales> 
      <TokenSale></TokenSale>
      <Timeline></Timeline>
      <Pricing></Pricing>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Faqs></Faqs>
      <FooterBox></FooterBox>
      
    </div>
    </>
  );
}

export default App;
