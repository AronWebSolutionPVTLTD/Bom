import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
import About from './component/About';
import Features from './component/Features';
import PrivateSales from './component/PrivateSales';
import TokenSale from './component/TokenSale';
import HomeSlider from './component/HomeSlider';
// import PrivateSales from './component/PrivateSales';

// >>>>>>> main
function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <HomeSlider></HomeSlider>
      <Vision></Vision>
      <UniqueNFT></UniqueNFT>
      <BuyBom></BuyBom>
      <About></About>
      <Features></Features>
      <PrivateSales></PrivateSales> 
      <TokenSale></TokenSale>
      {/* <PrivateSales></PrivateSales> */}
    </div>
    </>
  );
}

export default App;
