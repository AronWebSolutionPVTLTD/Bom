import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
import About from './component/About';
import Features from './component/Features';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
//import PrivateSales from './component/PrivateSales';


// >>>>>>> main
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
      {/* <PrivateSales></PrivateSales> */}
      <Pricing></Pricing>
      <Contact></Contact>
      
    </div>
    </>
  );
}

export default App;
