import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface MapCardProps {
  title: string;
  imageUrl: string;
  footerText: string;
  isMarket?: boolean;
}

const MapCard: React.FC<MapCardProps> = ({ title, imageUrl, footerText, isMarket = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-gray-700">{title}</h2>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>
      
      <div className="relative aspect-[4/3] w-full mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="pt-2 border-t border-gray-200 flex items-center">
        <span className={`text-[10px] font-medium ${isMarket ? 'text-[#2B4251]' : 'text-blue-400'}`}>{footerText}</span>
      </div>
    </div>
  );
};

export function FeederMaps() {
  const guestMapUrl = "https://i.imgur.com/XYZ123.jpg"; // Replace with actual map URL
  const revenueMapUrl = "https://i.imgur.com/ABC456.jpg"; // Replace with actual map URL

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <MapCard
        title="Guest Map"
        imageUrl={guestMapUrl}
        footerText="ELP"
        isMarket={false}
      />
      <MapCard
        title="Guest Map"
        imageUrl={guestMapUrl}
        footerText="Market"
        isMarket={true}
      />
      <MapCard
        title="Revenue Map"
        imageUrl={revenueMapUrl}
        footerText="ELP"
        isMarket={false}
      />
      <MapCard
        title="Revenue Map"
        imageUrl={revenueMapUrl}
        footerText="Market"
        isMarket={true}
      />
    </div>
  );
}