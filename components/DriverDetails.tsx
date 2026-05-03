
import React from 'react';
import { Driver } from '../types';

interface DriverDetailsProps {
  driver: Driver;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ driver }) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Header Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src={driver.photo} 
            alt={driver.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm"
          />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 leading-tight">{driver.name}</h2>
          <p className="text-xs font-semibold text-blue-600 mt-0.5">Warehouse Driver • 3 Years</p>
        </div>
      </div>

      {/* Delivery Schedule Banner */}
      {driver.deliverySchedule && (
        <div className="bg-blue-900 text-white rounded-xl p-3 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 translate-x-3 -translate-y-3">
             <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3h2v4h4V3h2v4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3zm0 2H5v10h14V9h-3v2h-2V9h-4v2h-2V9z"/>
             </svg>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-blue-300 mb-0.5">Scheduled Delivery</p>
          <p className="text-sm font-extrabold tracking-tight">{driver.deliverySchedule}</p>
        </div>
      )}

      {/* Vehicle Card */}
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-1">Vehicle</p>
              <p className="text-xs font-bold text-gray-800">{driver.vehicle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-1">Plate</p>
            <p className="text-xs font-bold text-gray-800">{driver.plate}</p>
          </div>
        </div>
      </div>

      {/* Progress / Status */}
      <div className="space-y-4 flex-grow">
        <div className="relative pl-7 pb-1 border-l-2 border-blue-900/10 ml-2">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-900 rounded-full border-2 border-white"></div>
          <div>
            <p className="text-[10px] font-bold text-blue-900 uppercase tracking-wider">In Transit</p>
            <p className="text-base font-bold text-gray-900 mt-1">Arrival: 3 hours</p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Departure: {driver.departureTime || 'TBA'}
            </p>
            {driver.distance && (
              <p className="text-[11px] font-semibold text-blue-600 mt-1 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {driver.distance}
              </p>
            )}
          </div>
        </div>

        {driver.stopovers?.map((stop, index) => (
          <div key={index} className="relative pl-7 pb-1 border-l-2 border-blue-900/10 ml-2">
            <div className="absolute -left-[5px] top-1 w-2 h-2 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Stopover {index + 1}</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{stop}</p>
            </div>
          </div>
        ))}
        
        <div className="relative pl-7 ml-2">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Drop-off</p>
            <p className="text-sm font-semibold text-gray-800 mt-1">109 Mayon St. Pinagsama Taguig City</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-4 border-t border-gray-100">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-900 rounded-xl font-bold text-sm transition-all hover:bg-blue-100 active:scale-95">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Message
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-950 active:scale-95">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </button>
      </div>
    </div>
  );
};

export default DriverDetails;
