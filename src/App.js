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

function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <Vision></Vision>
      <UniqueNFT></UniqueNFT>
      <BuyBom></BuyBom>
      <About></About>
      <Features></Features>
      <Faqs></Faqs>
      <FooterBox></FooterBox>
    </div>
    </>
  );
}

export default App;
