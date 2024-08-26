import React, { useState } from "react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

const ZoomControl = ({ zoomLevel, onZoomChange }) => {
  const handleZoomIn = () => {
    onZoomChange(Math.min(zoomLevel + 0.1, 2.5));
  };

  const handleZoomOut = () => {
    onZoomChange(Math.max(zoomLevel - 0.1, 1));
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center space-x-3 bg-white p-3 rounded-lg shadow-lg z-50">
      <button
        onClick={handleZoomOut}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        aria-label="Zoom Out"
      >
        <FiZoomOut size={20} />
      </button>
      <input
        type="range"
        min="1"
        max="2.5"
        step="0.1"
        value={zoomLevel}
        onChange={(e) => onZoomChange(parseFloat(e.target.value))}
        className="slider"
        aria-label="Zoom Slider"
      />
      <button
        onClick={handleZoomIn}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        aria-label="Zoom In"
      >
        <FiZoomIn size={20} />
      </button>
    </div>
  );
};

export default ZoomControl;
