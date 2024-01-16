import React from 'react';
import './App.css';
import WeatherWidget from './component/WeatherWidget.tsx';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Weather App</h1>
    </header>
    <WeatherWidget />
  </div>
);
}

export default App;
