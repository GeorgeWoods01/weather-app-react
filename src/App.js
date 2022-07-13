import React, {useState} from 'react';
import axios from 'axios';

function App() {

// const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=d4cec66f97b416c85a3b9da1d22edb75`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>95ºF</h1>
          </div>
          <div className="description">
            <p>Well hot</p>
          </div>
        </div>
        <div className="bottom">
           <div className="feels">
             <p>95ºF</p>
           </div>
           <div className="humidity">
             <p>100%</p>
           </div>
           <div className="wind">
             175 MPH
           </div>

        </div>
      </div>
    </div>
  );
}

export default App;
