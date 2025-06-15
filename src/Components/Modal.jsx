import React from 'react';
import '../Assets/css/About.css';
import '../Assets/css/Modal.css';

const Modal = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  const getIconAndColors = () => {
    switch (type) {
      case 'success':
        return {
          icon: '✓',
          borderColor: 'border-green-400',
          textColor: 'text-green-400',
          iconBg: 'bg-green-500'
        };
      case 'error':
        return {
          icon: '✕',
          borderColor: 'border-red-400',
          textColor: 'text-red-400',
          iconBg: 'bg-red-500'
        };
      default:
        return {
          icon: 'ℹ',
          borderColor: 'border-blue-400',
          textColor: 'text-blue-400',
          iconBg: 'bg-blue-500'
        };
    }
  };

  const { icon, borderColor, textColor, iconBg } = getIconAndColors();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center modal-overlay">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className={`relative mx-4 w-full max-w-md transform rounded-xl about-blur-bg border ${borderColor} p-6 shadow-2xl modal-content`}>
        <div className="flex justify-center mb-4">
          <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center`}>
            <span className="text-white text-2xl font-bold">{icon}</span>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className={`text-xl font-semibold ${textColor} mb-3 font-orbitron`}>
            {title}
          </h3>
          <p className="text-gray-200 leading-relaxed mb-6">
            {message}
          </p>
          
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-full ${iconBg} text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
