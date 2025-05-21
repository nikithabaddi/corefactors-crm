import React from 'react';

const CookieDialog = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <button
        className="absolute top-8 right-8 bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={onClose}
      >
        Cancel
      </button>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-0"
        role="dialog"
        aria-modal="true"
        style={{ transform: 'translateX(-25%)' }}
      >
        <div className="w-full h-[700px]">
          <iframe
            src="https://calendly.com/nikitabaddi1604/new-meeting"
            width="150%"
            height="100%"
            frameBorder="0"
            title="Book a Demo"
            style={{ minHeight: 700, borderRadius: 8 }}
            allow="camera; microphone; fullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CookieDialog;
