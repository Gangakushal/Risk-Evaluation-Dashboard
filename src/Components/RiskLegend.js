import React from 'react';

const RiskLegend = () => (
    <div className="flex flex-col items-start mt-8 md:ml-8">
      <div className="flex items-center mb-3">
        <span className="w-5 h-5 bg-red-400 inline-block mr-3"></span>
        <span>High Risk (Strong need for innovation)</span>
      </div>
      <div className="flex items-center mb-3">
        <span className="w-5 h-5 bg-yellow-400 inline-block mr-3"></span>
        <p>Medium Risk (Need for innovation)</p>
      </div>
      <div className="flex items-center mb-3">
        <span className="w-5 h-5 bg-teal-400 inline-block mr-3"></span>
        <span>Low Risk (Low need for innovation)</span>
      </div>
    </div>
);

export default RiskLegend;
