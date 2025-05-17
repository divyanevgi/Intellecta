import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart: React.FC = () => {
  // Mock data
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Quiz Accuracy',
        data: [65, 72, 68, 75, 80, 85, 82],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Pomodoros Completed',
        data: [3, 5, 4, 6, 4, 2, 5],
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        tension: 0.3,
      }
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
        border: {
            display: false,
      },
      },
      x: {
        grid: {
            display: false,
        },
        border: {
            display: false,
      },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-fade-in">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Weekly Progress</h2>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressChart;