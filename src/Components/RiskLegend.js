import React from 'react';

const RiskLegend = () => (
    <div className="legend">
        
        <style jsx>{`
      .legend {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
      }
      .legend-item {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .legend-item span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .high-risk { background-color: rgba(255, 99, 132, 0.6); }
      .medium-risk { background-color: rgba(255, 206, 86, 0.6); }
      .low-risk { background-color: rgba(75, 192, 192, 0.6); }
    `}</style>
    </div>
);

export default RiskLegend;
