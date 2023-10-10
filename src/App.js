import React from 'react-dom';
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Capa from './components/Capa'
import Footer from './components/Footer'
import PrimeiroBox from './components/PrimeiroBox';
import SegundoBox from './components/SegundoBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Capa> <Carousel /> </Capa>
      <PrimeiroBox />
      <SegundoBox />
      <Footer /> 
    </div>
  );
}

export default App;
