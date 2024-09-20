import { useState } from 'react';
import './App.css';
import logo from "./assets/background.svg";
import Footer from './components/Footer';
import Header from './components/Header';
import AgeDisplay from './components/AgeDisplay';

function App() {
  const [started, setStarted] = useState(false)
  const [load, setLoad] = useState()
  const [age, setAge] = useState(0)
  const [showAge, setShowAge] = useState(false)

  const startCalculation = () => {
    if (!started && age > 0) {
      setStarted(true);
      let i = 0;
      const incrementLoad = () => {
        if (i <= 100) {
          setLoad(i);
          i++;
          setTimeout(incrementLoad, 50);
        }
        else {
          setStarted(false);
          setShowAge(true)
        }
      };
      incrementLoad();
    }
  };


  return (
    <div className="App">
      <img className='background' src={logo} width={100} height={100} alt="" />
      <Header />
      <div className="hero">
        <p className="welcome">Welcome to the best website ever made</p>
        <h1 className="title">Age Calculator <span>AI</span></h1>
        <p className="description">This website will incredibly calculate your age, using complex AI. Designed by
          MIT’s engineers. This project will blow your mind.</p>
      </div>

      <div className="loadingBar">
        <div className="bar" style={{
        display: started ? "flex" : "none"
      }}>
          <div className="filler" style={{
            width: `${load}%`
          }}>
          </div>
        </div>
      </div>

      <div className="inputSection">
        <input onChange={(e) => {
          setAge(e.target.value)
        }} placeholder='Enter your age' type="number" />
        <button onClick={() => {
          startCalculation()
        }}>Calculate</button>
      </div>
      <AgeDisplay showAge={showAge} setShowAge={setShowAge} age={age}/>
      <Footer />
    </div>
  );
}

export default App;
