
import React, { useState } from 'react';
import MapArea from './components/MapArea';
import DriverDetails from './components/DriverDetails';
import EmbedModal from './components/EmbedModal';
import { Driver } from './types';

const MOCK_DRIVER: Driver = {
  name: "Carlo Estrada",
  rating: 4.9,
  vehicle: "L300 (White)",
  plate: "NFJ 2264",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9gUW2BGgVMj-w-IjFh3mJyogC7XuJkerSIFEGSXpEXTaSmpqkwg2_nut&s=10",
  deliverySchedule: "9:30 AM May 3, Sunday",
  distance: "33 kilometers",
  departureTime: "9:30 AM May 3, Sunday"
};

const App: React.FC = () => {
  const [embedCode, setEmbedCode] = useState<string | null>(`
    <div style="width: 100%; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0;">
      <iframe 
        width="100%" 
        height="450" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps?saddr=Matulungin,Marilao,3019+Bulacan&daddr=109+Mayon+St,Taguig&output=embed" 
        allowfullscreen>
      </iframe>
    </div>
  `);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Navigation / Header (Mobile) */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="font-extrabold text-blue-900 tracking-tight uppercase text-sm">PC WAREHOUSE</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors shadow-lg active:scale-95"
        >
          Embed
        </button>
      </header>

      {/* Main Layout */}
      <div className="flex-grow relative h-full flex flex-col md:flex-row">
        
        {/* Map Container */}
        <section className="flex-1 relative h-[50vh] md:h-full z-10">
          <MapArea embedCode={embedCode} />
          
          {/* Floating Embed Button for Desktop */}
          <div className="hidden md:block absolute top-6 right-6 z-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white/90 backdrop-blur text-blue-900 px-6 py-3 rounded-2xl font-bold shadow-2xl border border-gray-100 hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Embed Map Source
            </button>
          </div>
        </section>

        {/* Content Sidebar / Bottom Sheet */}
        <aside className="w-full md:w-[400px] lg:w-[480px] bg-white z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-[-10px_0_40px_-15px_rgba(0,0,0,0.1)] rounded-t-[32px] md:rounded-none flex flex-col overflow-y-auto">
          {/* Draggable Handle Indicator (Mobile Only) */}
          <div className="md:hidden flex justify-center py-3">
            <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
          </div>

          <div className="p-6 md:p-10 flex flex-col h-full">
            {/* Desktop Brand (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-blue-900 tracking-tighter uppercase italic leading-none">PC WAREHOUSE</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-0.5">Driver Tracker</span>
              </div>
            </div>

            <DriverDetails driver={MOCK_DRIVER} />
          </div>
        </aside>
      </div>

      {/* Embed Modal */}
      <EmbedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={(code) => setEmbedCode(code)} 
      />
    </div>
  );
};

export default App;
