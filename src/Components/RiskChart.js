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
import annotationPlugin from 'chartjs-plugin-annotation';

// Register necessary Chart.js components, including annotation
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, annotationPlugin);

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

  // Options for the chart, including annotation for arrows
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
      annotation: {
        annotations: {
          highRisk: {
            type: 'line',
            yMin: 7,
            yMax: 10,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'High Risk',
              position: 'center',
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            arrowHeads: {
              end: {
                enabled: true,
              },
            },
          },
          mediumRisk: {
            type: 'line',
            yMin: 4,
            yMax: 7.8,
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Medium Risk',
              position: 'center',
              backgroundColor: 'rgba(255, 206, 86, 0.7)',
            },
            arrowHeads: {
              end: {
                enabled: true,
              },
            },
          },
          lowRisk: {
            type: 'line',
            yMin: 1,
            yMax: 4.9,
            borderColor: 'teal',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Low Risk',
              position: 'center',
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
            },
            arrowHeads: {
              end: {
                enabled: true,
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-5 text-purple-700">
        Risk Evaluation Dashboard
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RiskChart;
