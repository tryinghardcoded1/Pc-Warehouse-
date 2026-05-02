
import React from 'react';

interface MapAreaProps {
  embedCode: string | null;
}

const MapArea: React.FC<MapAreaProps> = ({ embedCode }) => {
  return (
    <div className="w-full h-full relative bg-gray-200 overflow-hidden">
      {embedCode ? (
        <div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: embedCode }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-4 px-6 text-center">
          <div className="p-6 bg-white/50 backdrop-blur rounded-full shadow-inner">
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-500">Map will appear here after embed</h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto">Click the EMBED button to paste your tracking map code.</p>
          </div>
        </div>
      )}
      
      {/* Map Overlay HUD (Simulated) */}
      <div className="absolute top-4 left-4 z-10 hidden md:block">
        <div className="bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg border border-gray-100 text-xs font-semibold">
          GPS: SIGNAL ACTIVE
        </div>
      </div>
    </div>
  );
};

export default MapArea;
