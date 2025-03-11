import React from 'react';
import { ChevronDown, ArrowUpDown, Plane } from 'lucide-react';

interface PostalData {
  cityCountry: string;
  postalCodes: string;
  guestCheckins: number;
  guestCheckinPercent: number;
  totalRent: number;
  revenuePerGuest: number;
  percentOfRent: number;
  adr: number;
  bookingWindow: number;
  avgLengthOfStay: number;
}

const postalData: PostalData[] = [
  {
    cityCountry: 'Austin',
    postalCodes: '78756 | 78746 | 78738 | 78734 | 78730 | 78728 | 78703 | 78701',
    guestCheckins: 16,
    guestCheckinPercent: 2.2,
    totalRent: 193558,
    revenuePerGuest: 12097,
    percentOfRent: 2.1,
    adr: 1975,
    bookingWindow: 2542,
    avgLengthOfStay: 6.0
  },
  {
    cityCountry: 'Atlanta',
    postalCodes: '30350 | 30342 | 30338 | 30332 | 30328 | 30327 | 30319 | 30312 | 30309 | 30307 | 30306 | 30305',
    guestCheckins: 16,
    guestCheckinPercent: 2.2,
    totalRent: 177327,
    revenuePerGuest: 11083,
    percentOfRent: 2.0,
    adr: 2136,
    bookingWindow: 2457,
    avgLengthOfStay: 5.0
  },
  {
    cityCountry: 'Dallas',
    postalCodes: '75287 | 75252 | 75230 | 75229 | 75225 | 75220 | 75214 | 75209 | 75205',
    guestCheckins: 14,
    guestCheckinPercent: 1.9,
    totalRent: 173581,
    revenuePerGuest: 12399,
    percentOfRent: 1.9,
    adr: 1847,
    bookingWindow: 2775,
    avgLengthOfStay: 6.0
  },
  {
    cityCountry: 'Nashville',
    postalCodes: '37221 | 37220 | 37215 | 37211 | 37205 | 37203',
    guestCheckins: 16,
    guestCheckinPercent: 2.2,
    totalRent: 140608,
    revenuePerGuest: 8788,
    percentOfRent: 1.6,
    adr: 1545,
    bookingWindow: 2398,
    avgLengthOfStay: 5.0
  },
  {
    cityCountry: 'Birmingham',
    postalCodes: '35244 | 35242 | 35226 | 35216 | 35213 | 35209',
    guestCheckins: 14,
    guestCheckinPercent: 1.9,
    totalRent: 137169,
    revenuePerGuest: 9798,
    percentOfRent: 1.5,
    adr: 1715,
    bookingWindow: 1383,
    avgLengthOfStay: 5.0
  },
  {
    cityCountry: 'Muscle Shoals',
    postalCodes: '35661',
    guestCheckins: 3,
    guestCheckinPercent: 0.4,
    totalRent: 129428,
    revenuePerGuest: 43143,
    percentOfRent: 1.4,
    adr: 6163,
    bookingWindow: 892,
    avgLengthOfStay: 7.0
  },
  {
    cityCountry: 'Suwanee',
    postalCodes: '30024',
    guestCheckins: 2,
    guestCheckinPercent: 0.3,
    totalRent: 117501,
    revenuePerGuest: 58751,
    percentOfRent: 1.3,
    adr: 5595,
    bookingWindow: 438,
    avgLengthOfStay: 10.0
  },
  {
    cityCountry: 'Germantown',
    postalCodes: '38139 | 38138',
    guestCheckins: 4,
    guestCheckinPercent: 0.5,
    totalRent: 114107,
    revenuePerGuest: 28527,
    percentOfRent: 1.3,
    adr: 3260,
    bookingWindow: 549,
    avgLengthOfStay: 8.0
  },
  {
    cityCountry: 'Brentwood',
    postalCodes: '37027',
    guestCheckins: 9,
    guestCheckinPercent: 1.2,
    totalRent: 113443,
    revenuePerGuest: 12605,
    percentOfRent: 1.3,
    adr: 1990,
    bookingWindow: 934,
    avgLengthOfStay: 6.0
  }
];

export function FeederMarketPostalTable() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300">
              <ChevronDown className="h-3 w-3 text-gray-700" />
            </div>
            <h2 className="text-base font-medium text-gray-700">Feeder Market Postal Code</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-1 text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded">
              <span>Guest Checkins</span>
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
              <th className="px-4 py-2 font-medium">Country/City</th>
              <th className="px-4 py-2 font-medium">Postal Codes</th>
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
            {postalData.map((row, index) => (
              <tr 
                key={row.cityCountry}
                className={`text-xs ${index !== postalData.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <td className="px-4 py-2 text-gray-900 font-medium">{row.cityCountry}</td>
                <td className="px-4 py-2 text-gray-600">{row.postalCodes}</td>
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