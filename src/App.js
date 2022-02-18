import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
// gurinder
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
=======
import About from './component/About';
import Features from './component/Features';
// import PrivateSales from './component/PrivateSales';


// >>>>>>> main
function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <Vision></Vision>
// gurinder
      <UniqueNFT></UniqueNFT>
      <BuyBom></BuyBom>
      <About></About>
      <Features></Features>
      {/* <PrivateSales></PrivateSales> */}
    </div>
    </>
  );
}

export default App;
