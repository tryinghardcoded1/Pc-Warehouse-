
import React from 'react';
import { Driver } from '../types';

interface DriverDetailsProps {
  driver: Driver;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ driver }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header Info */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <img 
            src={driver.photo} 
            alt={driver.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 shadow-sm"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">{driver.name}</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="flex items-center text-yellow-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-sm ml-0.5 text-gray-700">{driver.rating}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 text-sm font-medium">1,240 Deliveries</span>
          </div>
        </div>
      </div>

      {/* Delivery Schedule Banner */}
      {driver.deliverySchedule && (
        <div className="bg-blue-900 text-white rounded-2xl p-4 mb-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 translate-x-4 -translate-y-4">
             <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3h2v4h4V3h2v4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3zm0 2H5v10h14V9h-3v2h-2V9h-4v2h-2V9z"/>
             </svg>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">Scheduled Delivery</p>
          <p className="text-lg font-extrabold tracking-tight">{driver.deliverySchedule}</p>
        </div>
      )}

      {/* Vehicle Card */}
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Vehicle</p>
              <p className="text-sm font-bold text-gray-800">{driver.vehicle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plate</p>
            <p className="text-sm font-bold text-gray-800">{driver.plate}</p>
          </div>
        </div>
      </div>

      {/* Progress / Status */}
      <div className="space-y-6 flex-grow">
        <div className="relative pl-8 pb-1 border-l-2 border-blue-900/10 ml-2">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-900 rounded-full border-2 border-white"></div>
          <div>
            <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">En Route</p>
            <p className="text-lg font-bold text-gray-900 mt-1">Arrival: Unavailable</p>
            <p className="text-sm text-gray-500 mt-1">
              Departure: {driver.departureTime || 'TBA'}
            </p>
            {driver.distance && (
              <p className="text-sm font-semibold text-blue-600 mt-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {driver.distance} total distance
              </p>
            )}
          </div>
        </div>
        
        <div className="relative pl-8 ml-2">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Drop-off</p>
            <p className="text-base font-semibold text-gray-800 mt-1">109 Mayon St pinagsama taguig city</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
        <button className="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-blue-50 text-blue-900 rounded-2xl font-bold transition-all hover:bg-blue-100 active:scale-95">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Message
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-blue-900 text-white rounded-2xl font-bold shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-950 active:scale-95">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </button>
      </div>
    </div>
  );
};

export default DriverDetails;
