import React, { useState } from 'react';
import { BarChart3, Globe, Settings, Bell, Menu, Filter, Clock, MoreHorizontal, ChevronDown, ChevronLeft, Plane } from 'lucide-react';
import { FeederMarketsChart } from './components/FeederMarketsChart';
import { FeederMarketTable } from './components/FeederMarketTable';
import { FeederMarketPostalTable } from './components/FeederMarketPostalTable';
import { FeederMaps } from './components/FeederMaps';
import { ChannelDistributionCharts } from './components/ChannelDistributionChart';
import { BookingCurveChart } from './components/BookingCurveChart';
import { MarketBookingCurveChart } from './components/MarketBookingCurveChart';

function App() {
  const [selectedTab, setSelectedTab] = useState('3/1/2024 - 2/28/2025');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-black text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <BarChart3 className="h-5 w-5" />
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Reporting</span>
              <span className="text-xs">▼</span>
            </button>
          </div>
          <button>AI Insights</button>
          <button>Marketplace</button>
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>PM Tools</span>
              <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-black px-4 py-1 rounded-md">
            Submit Feedback
          </button>
          <div className="flex items-center space-x-2">
            <span>JB</span>
            <span>Echelon Luxury Properties</span>
          </div>
          <Globe className="h-5 w-5" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Reports</h1>
          <div className="flex items-center mb-4 justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center text-gray-700">
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 mr-2">
                <ChevronDown className="h-3 w-3 text-gray-700" />
              </div>
              <span className="text-base">Feeder Markets</span>
            </div>
            <div className="flex items-center space-x-3">
              <Filter className="h-4 w-4 text-gray-400" />
              <Clock className="h-4 w-4 text-gray-400" />
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-500">Arrival</span>
                <Plane className="h-4 w-4 text-gray-400" />
              </div>
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Time Period Selection */}
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-600 font-medium bg-white rounded-full px-2.5 py-1">Last 12 Months</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedTab('3/1/2024 - 2/28/2025')}
                className={`flex items-center rounded-full px-2.5 py-1 text-xs border ${
                  selectedTab === '3/1/2024 - 2/28/2025'
                    ? 'bg-white shadow-sm border-blue-400'
                    : 'border-transparent text-gray-600'
                }`}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5" />
                <span>3/1/2024 - 2/28/2025</span>
              </button>
              <button
                onClick={() => setSelectedTab('3/1/2023 - 2/28/2024')}
                className={`flex items-center rounded-full px-2.5 py-1 text-xs bg-white border ${
                  selectedTab === '3/1/2023 - 2/28/2024'
                    ? 'shadow-sm border-red-400'
                    : 'border-red-400'
                }`}
              >
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1.5" />
                <span>3/1/2023 - 2/28/2024</span>
              </button>
              <button
                onClick={() => setSelectedTab('30A')}
                className={`rounded-full px-2.5 py-1 text-xs bg-white ${
                  selectedTab === '30A'
                    ? 'shadow-sm border border-gray-200'
                    : 'text-gray-600'
                }`}
              >
                30A
              </button>
            </div>
          </div>
        </div>

        {/* Chart Containers */}
        <div className="space-y-6">
          <FeederMarketsChart />
          <FeederMarketTable />
          <FeederMarketPostalTable />
          <FeederMaps />
          <div className="mt-8">
            <div className="mb-6">
              <div className="flex items-center mb-4 justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center text-gray-700">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 mr-2">
                    <ChevronDown className="h-3 w-3 text-gray-700" />
                  </div>
                  <span className="text-base">Channel Distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <Clock className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-500">Arrival</span>
                    <Plane className="h-4 w-4 text-gray-400" />
                  </div>
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Time Period Selection */}
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-600 font-medium bg-white rounded-full px-2.5 py-1">Current Year</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="flex items-center rounded-full px-2.5 py-1 text-xs border bg-white shadow-sm border-blue-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5" />
                    <span>1/1/2025 - 12/31/2025</span>
                  </button>
                  <button
                    className="rounded-full px-2.5 py-1 text-xs bg-white text-gray-600"
                  >
                    30A
                  </button>
                </div>
              </div>
            </div>
            <ChannelDistributionCharts />
          </div>
          <BookingCurveChart />
          <MarketBookingCurveChart />
        </div>
      </div>
    </div>
  );
}

export default App;