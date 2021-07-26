import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Visualizer from './components/Visualizer/Visualizer';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0)

  const handleProgress = ({ playedSeconds }) => {
    setElapsedTime(playedSeconds)
    // console.log(playedSeconds)
  }

  return (
    <div className="SiteLayout">
      <div className="Header">
        <Header />
      </div>
      <div className="Visualizer">
        <Visualizer elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} handleProgress={handleProgress} />
      </div>
      {/* <div className="Tracks">
        <Tracks />
      </div> */}
      <div className="BottomBorder"></div>
      <div className="Footer">
        <Footer elapsedTime={elapsedTime} />
      </div>
    </div>
  );
}

export default App;
