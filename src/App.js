import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <Vision></Vision>
      <UniqueNFT></UniqueNFT>
      <BuyBom></BuyBom>
    </div>
    </>
  );
}

export default App;
