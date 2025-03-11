import React from 'react';
import { ChevronDown, ArrowUpDown, Plane } from 'lucide-react';

interface StateData {
  country: string;
  state: string;
  guestCheckins: number;
  guestCheckinPercent: number;
  totalRent: number;
  revenuePerGuest: number;
  percentOfRent: number;
  adr: number;
  bookingWindow: number;
  avgLengthOfStay: number;
}

const stateData: StateData[] = [
  {
    country: 'US',
    state: 'Texas',
    guestCheckins: 123,
    guestCheckinPercent: 16.5,
    totalRent: 1510000,
    revenuePerGuest: 12294,
    percentOfRent: 16.7,
    adr: 2030,
    bookingWindow: 20264,
    avgLengthOfStay: 6.0
  },
  {
    country: 'US',
    state: 'Tennessee',
    guestCheckins: 77,
    guestCheckinPercent: 10.3,
    totalRent: 920963,
    revenuePerGuest: 11961,
    percentOfRent: 10.2,
    adr: 1972,
    bookingWindow: 12336,
    avgLengthOfStay: 6.0
  },
  {
    country: 'US',
    state: 'Georgia',
    guestCheckins: 75,
    guestCheckinPercent: 10.1,
    totalRent: 867205,
    revenuePerGuest: 11563,
    percentOfRent: 9.6,
    adr: 1971,
    bookingWindow: 11495,
    avgLengthOfStay: 5.0
  },
  {
    country: 'US',
    state: 'Alabama',
    guestCheckins: 48,
    guestCheckinPercent: 6.5,
    totalRent: 590112,
    revenuePerGuest: 12294,
    percentOfRent: 6.5,
    adr: 2244,
    bookingWindow: 5744,
    avgLengthOfStay: 5.0
  },
  {
    country: 'US',
    state: 'Florida',
    guestCheckins: 42,
    guestCheckinPercent: 5.6,
    totalRent: 511446,
    revenuePerGuest: 12177,
    percentOfRent: 5.6,
    adr: 2113,
    bookingWindow: 6472,
    avgLengthOfStay: 5.0
  },
  {
    country: 'US',
    state: 'Missouri',
    guestCheckins: 30,
    guestCheckinPercent: 4.0,
    totalRent: 439630,
    revenuePerGuest: 14654,
    percentOfRent: 4.9,
    adr: 2187,
    bookingWindow: 5583,
    avgLengthOfStay: 6.0
  },
  {
    country: 'US',
    state: 'Ohio',
    guestCheckins: 33,
    guestCheckinPercent: 4.4,
    totalRent: 384860,
    revenuePerGuest: 11662,
    percentOfRent: 4.2,
    adr: 1824,
    bookingWindow: 5961,
    avgLengthOfStay: 6.0
  },
  {
    country: 'US',
    state: 'Indiana',
    guestCheckins: 24,
    guestCheckinPercent: 3.2,
    totalRent: 377996,
    revenuePerGuest: 15750,
    percentOfRent: 4.2,
    adr: 1019,
    bookingWindow: 4019,
    avgLengthOfStay: 15.0
  },
  {
    country: 'US',
    state: 'Illinois',
    guestCheckins: 29,
    guestCheckinPercent: 3.9,
    totalRent: 364141,
    revenuePerGuest: 12557,
    percentOfRent: 4.0,
    adr: 1877,
    bookingWindow: 3391,
    avgLengthOfStay: 6.0
  }
];

export function FeederMarketTable() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300">
              <ChevronDown className="h-3 w-3 text-gray-700" />
            </div>
            <h2 className="text-base font-medium text-gray-700">Feeder Market State</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-1 text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded">
              <span>ADR</span>
              <ArrowUpDown className="h-3 w-3" />
            </button>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">Arrival</span>
              <Plane className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="px-4 py-2 font-medium">Country</th>
              <th className="px-4 py-2 font-medium">State</th>
              <th className="px-4 py-2 font-medium text-right">Guest Checkins</th>
              <th className="px-4 py-2 font-medium text-right">Guest Check-ins %</th>
              <th className="px-4 py-2 font-medium text-right">Total Rent</th>
              <th className="px-4 py-2 font-medium text-right">Revenue Per Guest</th>
              <th className="px-4 py-2 font-medium text-right">% Of Rent</th>
              <th className="px-4 py-2 font-medium text-right">ADR</th>
              <th className="px-4 py-2 font-medium text-right">Booking Window</th>
              <th className="px-4 py-2 font-medium text-right">Avg. Length of Stay</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map((row, index) => (
              <tr 
                key={row.state}
                className={`text-xs ${index !== stateData.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <td className="px-4 py-2 text-gray-600">{row.country}</td>
                <td className="px-4 py-2 text-gray-900 font-medium">{row.state}</td>
                <td className="px-4 py-2 text-right text-gray-900">{row.guestCheckins}</td>
                <td className="px-4 py-2 text-right text-gray-900">{row.guestCheckinPercent}%</td>
                <td className="px-4 py-2 text-right text-gray-900">${row.totalRent.toLocaleString()}</td>
                <td className="px-4 py-2 text-right text-gray-900">${row.revenuePerGuest.toLocaleString()}</td>
                <td className="px-4 py-2 text-right text-gray-900">{row.percentOfRent}%</td>
                <td className="px-4 py-2 text-right text-gray-900">${row.adr.toLocaleString()}</td>
                <td className="px-4 py-2 text-right text-gray-900">{row.bookingWindow.toLocaleString()}</td>
                <td className="px-4 py-2 text-right text-gray-900">{row.avgLengthOfStay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-2 border-t border-gray-200">
        <span className="text-blue-400 text-[10px] font-medium">ELP</span>
      </div>
    </div>
  );
}