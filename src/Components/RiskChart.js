import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './App.css'; // Assuming you have an external CSS file for styling

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RiskChart = () => {
  // Data for the chart
  const data = {
    labels: ['Market Maturity', 'Market Situation', 'Competitors', 'Competition', 'Customers'],
    datasets: [
      {
        label: '', // Empty label for bars
        data: [6.6, 6.3, 5.7, 5.0, 5.3], // Risk levels
        backgroundColor: [
          'rgba(152, 123, 209, 0.7)', // Bar 1
          'rgba(165, 135, 222, 0.7)', // Bar 2
          'rgba(191, 157, 240, 0.7)', // Bar 3
          'rgba(208, 178, 247, 0.7)', // Bar 4
          'rgba(226, 201, 255, 0.7)', // Bar 5
        ],
        borderColor: '#512da8',
        borderWidth: 2,
        borderRadius: 20, // Rounded corners
        barThickness: 40, // Adjust thickness of bars
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    indexAxis: 'x', // Vertical bars
    scales: {
      y: {
        min: 1,
        max: 10, // Fixed y-axis from 1 to 10
        ticks: {
          color: '#000', // Tick color
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.5)',
        },
      },
      x: {
        ticks: {
          color: '#000',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disables the legend box
      },
      tooltip: {
        callbacks: {
          label: (context) => `Risk: ${context.raw}`, // Custom tooltip
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Risk Evaluation Dashboard</h2>
      <Bar data={data} options={options} />
      <div className="risk-legend">
        <div className="risk-level high-risk">High Risk (Strong need for innovation)</div>
        <div className="risk-level medium-risk">Medium Risk (Need for innovation)</div>
        <div className="risk-level low-risk">Low Risk (Low need for innovation)</div>
      </div>
    </div>
  );
};

export default RiskChart;
