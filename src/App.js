import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tracks from './components/Tracks/Tracks';
import Visualizer from './components/Visualizer/Visualizer';

function App() {
	const [elapsedTime, setElapsedTime] = useState(0)

	const handleProgress = ({playedSeconds}) => {
		setElapsedTime(playedSeconds)
    // console.log(playedSeconds)
	}

  return (
    <div className="SiteLayout">
      <Header/>
      <Visualizer elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} handleProgress={handleProgress}/>
      <Tracks/>
      <div className="BottomBorder"></div>
      <Footer elapsedTime={elapsedTime}/>
    </div>
  );
}

export default App;
