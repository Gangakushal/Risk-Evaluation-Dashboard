import React from 'react';
import RiskChart from './Components/RiskChart';
import RiskLegend from './Components/RiskLegend';

function App() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-purple-800">
        Risk Evaluation Dashboard
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <RiskChart />
        <RiskLegend />
      </div>
    </div>
  );
}

export default App;
