import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import About from './component/About';
import Features from './component/Features';
// import PrivateSales from './component/PrivateSales';


function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <Vision></Vision>
      <About></About>
      <Features></Features>
      {/* <PrivateSales></PrivateSales> */}
    </div>
    </>
  );
}

export default App;
