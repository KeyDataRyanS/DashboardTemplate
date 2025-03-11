import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const months = ['03/25', '02/25', '01/25', '12/24', '11/24', '10/24', '09/24', '08/24', '07/24', '06/24', '05/24', '04/24', '03/24', '05/23'];
const individualReservations = [51, 128, 182, 67, 48, 25, 34, 18, 14, 15, 4, 7, 2, 0];
const cumulativeReservations = [595, 544, 416, 234, 167, 119, 94, 60, 42, 28, 13, 9, 2, 0];

export function MarketBookingCurveChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest' as const,
      intersect: true,
      axis: 'x' as const,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#6B7280',
        },
        offset: true,
      },
      y: {
        position: 'left' as const,
        grid: {
          color: '#E5E7EB',
        },
        border: {
          display: false,
        },
        title: {
          display: true,
          text: 'Booking Curve',
          font: {
            size: 12,
            weight: '500',
          },
          color: '#374151',
          padding: { bottom: 10 },
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#6B7280',
        },
        min: 0,
        max: 600,
        stepSize: 200,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 8,
        titleFont: {
          size: 12,
          weight: '600',
        },
        bodyFont: {
          size: 12,
        },
        displayColors: false,
        callbacks: {
          title: function() {
            return '';
          },
          label: function(context: any) {
            if (context.datasetIndex === 2) {
              return `Cumulative Reservations: ${context.raw}`;
            }
            return null;
          },
        },
        filter: function(tooltipItem: any) {
          return tooltipItem.datasetIndex === 2;
        },
      },
      datalabels: {
        display: function(context: any) {
          return context.datasetIndex === 1;
        },
        color: '#FFFFFF',
        backgroundColor: '#2B4251',
        borderRadius: 4,
        padding: {
          top: 2,
          bottom: 2,
          left: 4,
          right: 4,
        },
        font: {
          size: 11,
          weight: '500',
        },
        formatter: function(value: number) {
          return value > 0 ? value.toString() : '';
        },
        anchor: 'end',
        align: 'end',
        offset: -8,
        clamp: true,
        clip: false,
      }
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        type: 'line' as const,
        label: 'Individual Reservations Points',
        data: individualReservations,
        borderColor: 'transparent',
        pointRadius: 4,
        pointBackgroundColor: '#2B4251',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        order: 0,
      },
      {
        type: 'bar' as const,
        label: 'Individual Reservations',
        data: individualReservations,
        backgroundColor: '#2B4251',
        borderRadius: 4,
        order: 1,
        barPercentage: 0.95,
        categoryPercentage: 0.95,
      },
      {
        type: 'line' as const,
        label: 'Cumulative Reservations',
        data: cumulativeReservations,
        borderColor: '#2B4251',
        backgroundColor: 'rgba(43, 66, 81, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#2B4251',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        borderWidth: 2,
        order: 2,
      },
    ],
  };

  return (
    <div className="mt-8">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="h-[400px]">
          <Bar options={options} data={data} />
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-6 text-[10px]">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#2B4251] rounded-full mr-1"></div>
              <span className="text-gray-600">Cumulative Reservations</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#2B4251] rounded-full mr-1"></div>
              <span className="text-gray-600">Individual Reservations</span>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 flex items-center">
          <span className="text-[#2B4251] text-[10px] font-medium">Market</span>
        </div>
      </div>
    </div>
  );
}