import React from 'react';
import RiskChart from './Components/RiskChart';
import RiskLegend from './Components/RiskLegend';
import './App.css'; 


function App() {
  return (
    <div className="App">
      <h1>Risk Evaluation Dashboard</h1>
      <div className="chart-container">
        <RiskChart />
        <RiskLegend />
      </div>
    </div>
  );
}

export default App;
