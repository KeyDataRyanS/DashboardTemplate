import React from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

interface ChannelData {
  name: string;
  value: number;
  color: string;
}

interface MetricData {
  name: string;
  value: number;
  displayValue: string;
  color: string;
}

interface DistributionChartProps {
  title: string;
  data: ChannelData[];
  footerText: string;
  maxValue: number;
  isMarket?: boolean;
}

interface MetricChartProps {
  title: string;
  data: MetricData[];
  maxValue: number;
  isMarket?: boolean;
}

const DistributionChart: React.FC<DistributionChartProps> = ({ title, data, footerText, maxValue, isMarket = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-gray-700">{title}</h2>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{item.name}</span>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-gray-200 flex items-center">
        <span className={`text-[10px] font-medium ${isMarket ? 'text-[#2B4251]' : 'text-blue-400'}`}>{footerText}</span>
      </div>
    </div>
  );
};

const MetricChart: React.FC<MetricChartProps> = ({ title, data, maxValue, isMarket = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-gray-700">{title}</h2>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{item.name}</span>
              <span className="text-sm font-medium">{item.displayValue}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-gray-200 flex items-center">
        <span className={`text-[10px] font-medium ${isMarket ? 'text-[#2B4251]' : 'text-blue-400'}`}>ELP</span>
      </div>
    </div>
  );
};

const elpGuestData: ChannelData[] = [
  { name: 'Airbnb', value: 43, color: '#FF8A80' },
  { name: 'Booking', value: 8, color: '#80CBC4' },
  { name: 'Direct', value: 29, color: '#90CAF9' },
  { name: 'VRBO', value: 21, color: '#0D3D4D' },
  { name: 'Other', value: 4, color: '#E0E0E0' },
];

const elpRevenueData: ChannelData[] = [
  { name: 'Airbnb', value: 38, color: '#FF8A80' },
  { name: 'Booking', value: 12, color: '#80CBC4' },
  { name: 'Direct', value: 31, color: '#90CAF9' },
  { name: 'VRBO', value: 19, color: '#0D3D4D' },
  { name: 'Other', value: 5, color: '#E0E0E0' },
];

const marketGuestData: ChannelData[] = [
  { name: 'Airbnb', value: 40, color: '#FF8A80' },
  { name: 'Booking', value: 11, color: '#80CBC4' },
  { name: 'Direct', value: 27, color: '#90CAF9' },
  { name: 'VRBO', value: 23, color: '#0D3D4D' },
  { name: 'Other', value: 3, color: '#E0E0E0' },
];

const marketRevenueData: ChannelData[] = [
  { name: 'Airbnb', value: 35, color: '#FF8A80' },
  { name: 'Booking', value: 15, color: '#80CBC4' },
  { name: 'Direct', value: 28, color: '#90CAF9' },
  { name: 'VRBO', value: 22, color: '#0D3D4D' },
  { name: 'Other', value: 4, color: '#E0E0E0' },
];

const adrData: MetricData[] = [
  { name: 'Airbnb', value: 243, displayValue: '$243', color: '#FF8A80' },
  { name: 'Booking', value: 205, displayValue: '$205', color: '#80CBC4' },
  { name: 'Direct', value: 353, displayValue: '$353', color: '#90CAF9' },
  { name: 'VRBO', value: 332, displayValue: '$332', color: '#0D3D4D' },
  { name: 'Other', value: 180, displayValue: '$180', color: '#E0E0E0' },
];

const stayLengthData: MetricData[] = [
  { name: 'Airbnb', value: 3.9, displayValue: '3.9', color: '#FF8A80' },
  { name: 'Booking', value: 3.5, displayValue: '3.5', color: '#80CBC4' },
  { name: 'Direct', value: 5.2, displayValue: '5.2', color: '#90CAF9' },
  { name: 'VRBO', value: 4.4, displayValue: '4.4', color: '#0D3D4D' },
  { name: 'Other', value: 2.8, displayValue: '2.8', color: '#E0E0E0' },
];

const bookingWindowData: MetricData[] = [
  { name: 'Airbnb', value: 38.63, displayValue: '38.63', color: '#FF8A80' },
  { name: 'Booking', value: 43.23, displayValue: '43.23', color: '#80CBC4' },
  { name: 'Direct', value: 79.80, displayValue: '79.80', color: '#90CAF9' },
  { name: 'VRBO', value: 65.79, displayValue: '65.79', color: '#0D3D4D' },
  { name: 'Other', value: 25.45, displayValue: '25.45', color: '#E0E0E0' },
];

export function ChannelDistributionCharts() {
  const maxGuestValue = Math.max(...elpGuestData.map(item => item.value));
  const maxRevenueValue = Math.max(...elpRevenueData.map(item => item.value));
  const maxAdrValue = Math.max(...adrData.map(item => item.value));
  const maxStayLength = Math.max(...stayLengthData.map(item => item.value));
  const maxBookingWindow = Math.max(...bookingWindowData.map(item => item.value));

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <DistributionChart
          title="Percentage of Guest Checkins"
          data={elpGuestData}
          footerText="ELP"
          maxValue={maxGuestValue}
          isMarket={false}
        />
        <DistributionChart
          title="Percentage of Guest Checkins"
          data={marketGuestData}
          footerText="Market"
          maxValue={maxGuestValue}
          isMarket={true}
        />
        <DistributionChart
          title="Percentage of Revenue"
          data={elpRevenueData}
          footerText="ELP"
          maxValue={maxRevenueValue}
          isMarket={false}
        />
        <DistributionChart
          title="Percentage of Revenue"
          data={marketRevenueData}
          footerText="Market"
          maxValue={maxRevenueValue}
          isMarket={true}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <MetricChart
          title="ADR"
          data={adrData}
          maxValue={maxAdrValue}
          isMarket={false}
        />
        <MetricChart
          title="Avg. Stay Length"
          data={stayLengthData}
          maxValue={maxStayLength}
          isMarket={false}
        />
        <MetricChart
          title="Avg. Booking Window"
          data={bookingWindowData}
          maxValue={maxBookingWindow}
          isMarket={false}
        />
      </div>
    </>
  );
}