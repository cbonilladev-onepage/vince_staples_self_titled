import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Visualizer from './components/Visualizer/Visualizer';

function App() {
  return (
    <div className="SiteLayout">
      <Header/>
      <Visualizer/>
      <div className="BottomBorder"></div>
      <Footer/>
    </div>
  );
}

export default App;
