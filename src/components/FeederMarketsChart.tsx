import React from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

interface MarketData {
  city: string;
  checkins: number;
  change: number;
}

const leftChartData: MarketData[] = [
  { city: 'Dallas, Texas', checkins: 846, change: 7 },
  { city: 'Atlanta, GA', checkins: 598, change: -4 },
  { city: 'Houston, TX', checkins: 411, change: 5 },
  { city: 'Birmingham, AL', checkins: 318, change: -4 },
  { city: 'Nashville, TN', checkins: 283, change: 3 },
];

const rightChartData: MarketData[] = [
  { city: 'Atlanta, GA', checkins: 12240, change: 9 },
  { city: 'Dallas, TX', checkins: 8732, change: -4 },
  { city: 'Houston, TX', checkins: 4391, change: 5 },
  { city: 'Birmingham, AL', checkins: 3389, change: -4 },
  { city: 'Louisville, KY', checkins: 2912, change: 3 },
];

const leftStateData: MarketData[] = [
  { city: 'Texas', checkins: 2845, change: 12 },
  { city: 'Georgia', checkins: 2156, change: 8 },
  { city: 'Florida', checkins: 1987, change: -4 },
  { city: 'Alabama', checkins: 1654, change: 4 },
  { city: 'Tennessee', checkins: 1432, change: 7 },
  { city: 'Louisiana', checkins: 1298, change: -4 },
  { city: 'South Carolina', checkins: 1187, change: 6 },
  { city: 'North Carolina', checkins: 1043, change: -4 },
  { city: 'Mississippi', checkins: 876, change: 5 },
  { city: 'Kentucky', checkins: 743, change: -4 },
];

const rightStateData: MarketData[] = [
  { city: 'Florida', checkins: 15678, change: 15 },
  { city: 'Texas', checkins: 14532, change: -4 },
  { city: 'Georgia', checkins: 12987, change: 8 },
  { city: 'Tennessee', checkins: 9876, change: 6 },
  { city: 'South Carolina', checkins: 8765, change: -4 },
  { city: 'North Carolina', checkins: 7654, change: 7 },
  { city: 'Alabama', checkins: 6543, change: -4 },
  { city: 'Louisiana', checkins: 5432, change: 4 },
  { city: 'Mississippi', checkins: 4321, change: -4 },
  { city: 'Kentucky', checkins: 3210, change: 5 },
];

const Chart = ({ data, footerText, barColor = '#60A5FA', isMarket = false, title }: { data: MarketData[], footerText: string, barColor?: string, isMarket?: boolean, title: string }) => {
  const maxCheckins = Math.max(...data.map(d => d.checkins));
  const maxChange = Math.max(...data.map(d => Math.abs(d.change)));
  const totalCheckins = data.reduce((sum, d) => sum + d.checkins, 0);

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'bg-emerald-500' : 'bg-red-500';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-1">
          <h2 className="text-sm font-medium text-gray-700">{title}</h2>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>

      <div>
        <div className="flex mb-2">
          <div className="w-[60%] flex">
            <div className="w-[120px] text-xs text-gray-600">Guest Checkins %</div>
            <div className="flex-1 text-xs text-gray-600 pl-2">Total Guest Checkins</div>
          </div>
          <div className="w-[40%] text-xs text-gray-600 text-center">Guest Checkins %</div>
        </div>

        <div className="space-y-2">
          {data.map((market) => {
            const percentage = ((market.checkins / totalCheckins) * 100).toFixed(1);
            return (
              <div key={market.city} className="h-7 flex items-center">
                <div className="w-[60%] flex items-center h-full">
                  <span className="text-[10px] text-gray-700 w-[120px] text-right pr-2 whitespace-nowrap">
                    {market.city} ({percentage}%)
                  </span>
                  <div className="flex-1 h-full flex items-center">
                    <div className="relative w-full h-5">
                      <div
                        className="absolute inset-y-0 left-0 rounded flex items-center justify-end pr-2"
                        style={{
                          width: `${(market.checkins / maxCheckins) * 100}%`,
                          backgroundColor: barColor,
                        }}
                      >
                        <span className="text-white text-[10px]">{market.checkins.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] flex items-center h-full">
                  <div className="relative w-full h-5">
                    {/* Center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
                    
                    {/* Percentage bar */}
                    <div
                      className={`absolute inset-y-0 rounded ${getChangeColor(market.change)} flex items-center`}
                      style={{
                        width: `${(Math.abs(market.change) / maxChange) * 45}%`,
                        left: market.change >= 0 ? '50%' : `${50 - (Math.abs(market.change) / maxChange) * 45}%`,
                      }}
                    >
                      <span
                        className="absolute text-white text-[9px] px-1 whitespace-nowrap"
                        style={{
                          left: market.change < 0 ? 'auto' : '2px',
                          right: market.change < 0 ? '2px' : 'auto',
                        }}
                      >
                        {market.change >= 0 ? '+' : ''}{market.change}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 mb-2">
        <div className="flex items-center space-x-4 text-[7px]">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
            <span className="text-gray-600">Guest Checkins | 3/9/2024 - 3/9/2025 as of 3/9/2025</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">Guest Checkins | 3/10/2023 - 3/9/2024 as of 3/10/2024</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-200 flex items-center">
        <span className={`text-[10px] font-medium ${isMarket ? 'text-[#2B4251]' : 'text-blue-400'}`}>{footerText}</span>
      </div>
    </div>
  );
};

export function FeederMarketsChart() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <Chart 
          data={leftChartData} 
          footerText="ELP" 
          barColor="#60A5FA" 
          isMarket={false}
          title="Feeder Markets Top 5: Guest Checkins"
        />
        <Chart 
          data={rightChartData} 
          footerText="Market" 
          barColor="#2B4251" 
          isMarket={true}
          title="Feeder Markets Top 5: Guest Checkins"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Chart 
          data={leftStateData} 
          footerText="ELP" 
          barColor="#60A5FA" 
          isMarket={false}
          title="Top Ten States: Guest Checkins"
        />
        <Chart 
          data={rightStateData} 
          footerText="Market" 
          barColor="#2B4251" 
          isMarket={true}
          title="Top Ten States: Guest Checkins"
        />
      </div>
    </div>
  );
}