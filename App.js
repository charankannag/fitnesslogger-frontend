import './App.css';
import React from 'react';
import Previouspage from './Pages/previouspage';
import Nextpage from './Pages/nextpage';
function App() {
  return (
    <div className="App" id="App">
      <h1><b>Fitness Center</b></h1>
      <h1><b>Fitness Logs</b></h1>
      <h3>Get hickup with us now</h3>
      <h1>Flat 50% Offer</h1>
      <h2>Energy is power of all new activities</h2>
    <div className="App-content" id="App-content">
      <h1>Activity Log 1: Warm up exersices self</h1>
      <h2>Time duration :2 mins</h2>
    </div>
    <div className="number-two" id="number-two">
      <h1>Activity Log 2: Hand Rotation</h1>
      <h2>Time duration : 2 mins</h2>
    </div>
    <div className="number-three" id="number-three">
      <h1>Activity Log 3: Leg Raise</h1>
      <h2>Time duration : 5 mins</h2>
    </div>
    <div className="number-four" id="number-four">
      <h1>Activity Log 4: Ribs Value</h1>
      <h2>Time duration : 5 mins</h2>
    </div>
   {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
  <div>
      <div style={{height: '5rem'}} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Scroll to top
      </button>
    </div> 
    <Previouspage></Previouspage>
    <Nextpage></Nextpage>
    </div>
  );
}

export default App;
