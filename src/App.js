import React, { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Tracks from './components/Tracks/Tracks';
import Visualizer from './components/Visualizer/Visualizer';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [playTime, setPlayTime] = useState(0)
  const appleRef = useRef()

  const logChange = () => {
		setElapsedTime(Math.floor(appleRef.current.currentTime))
	}

  const handleProgress = ({ playedSeconds }) => {
    setElapsedTime(playedSeconds)
  }

  return (
    <div className="SiteLayout">
      <div className="Header">
        <Header />
      </div>
      <div className="Visualizer">
        <Visualizer elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} handleProgress={handleProgress} playTime={playTime} setPlayTime={setPlayTime} appleRef={appleRef} logChange={logChange}/>
      </div>
      <div className="Tracks">
        {/* <Tracks /> */}
      </div>
      <div className="BottomBorder"></div>
      <div className="Footer">
        <Footer elapsedTime={elapsedTime} />
      </div>
    </div>
  );
}

export default App;