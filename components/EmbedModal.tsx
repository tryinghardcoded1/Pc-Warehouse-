
import React, { useState } from 'react';

interface EmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (code: string) => void;
}

const EmbedModal: React.FC<EmbedModalProps> = ({ isOpen, onClose, onSave }) => {
  const [tempCode, setTempCode] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (tempCode.trim()) {
      onSave(tempCode);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-800">Embed Map Source</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-500">
            Paste your iframe or map script tag below to render the live tracking view.
          </p>
          <textarea
            value={tempCode}
            onChange={(e) => setTempCode(e.target.value)}
            className="w-full h-48 p-4 font-mono text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
            placeholder={`<iframe src="..." width="100%" height="450"></iframe>`}
          />
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 rounded-xl bg-blue-900 font-semibold text-white hover:bg-blue-950 shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
          >
            Save & View Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmbedModal;
