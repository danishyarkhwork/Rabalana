"use client";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Rnd } from "react-rnd";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CustomizePage = () => {
  const [font, setFont] = useState("Engry");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("center");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const handleFontSizeChange = (amount) => {
    setFontSize((prev) => Math.max(8, prev + amount));
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleTextAlign = (align) => {
    setTextAlign(align);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
  };

  const handleDownloadImage = async () => {
    const element = document.querySelector(".rnd-container"); // Update to your container class or id
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: zoomLevel,
    });
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "template.png";
    link.click();
  };

  const handleDownloadPDF = async () => {
    const element = document.querySelector(".rnd-container"); // Update to your container class or id
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: zoomLevel,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Adjust width and height as needed
    pdf.save("template.pdf");
  };

  const handlePrint = () => {
    const element = document.querySelector(".rnd-container"); // Update to your container class or id
    if (!element) return;

    const newWindow = window.open();
    newWindow.document.write(element.outerHTML);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my design!",
          url: window.location.href, // Assuming you want to share the current page
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  const handleOrderPrints = () => {
    alert("Order Prints functionality will be implemented here.");
    // You can redirect to a print order page or implement your order logic here
  };

  return (
    <div className="h-screen flex flex-col mt-16">
      {/* Top Toolbar */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 shadow-md">
        <div className="flex items-center space-x-3">
          {/* Font Selector */}
          <select
            value={font}
            onChange={handleFontChange}
            className="p-1 border rounded-md shadow-sm text-sm"
          >
            <option value="Engry">Engry</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>

          {/* Font Size Controls */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleFontSizeChange(-1)}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 text-sm"
            >
              -
            </button>
            <span className="font-semibold text-sm">{fontSize}</span>
            <button
              onClick={() => handleFontSizeChange(1)}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 text-sm"
            >
              +
            </button>
          </div>

          {/* Color Picker */}
          <div className="relative">
            <button
              onClick={toggleColorPicker}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: fontColor }}
              ></div>
            </button>
            {showColorPicker && (
              <div className="absolute mt-2 z-50">
                <SketchPicker
                  color={fontColor}
                  onChange={(color) => setFontColor(color.hex)}
                />
              </div>
            )}
          </div>

          {/* Bold, Italic, Underline */}
          <div className="flex items-center space-x-1">
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 font-bold text-sm ${
                isBold ? "bg-gray-300" : ""
              }`}
              onClick={toggleBold}
            >
              B
            </button>
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 italic text-sm ${
                isItalic ? "bg-gray-300" : ""
              }`}
              onClick={toggleItalic}
            >
              I
            </button>
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 underline text-sm ${
                isUnderline ? "bg-gray-300" : ""
              }`}
              onClick={toggleUnderline}
            >
              U
            </button>
          </div>

          {/* Text Alignment */}
          <div className="flex items-center space-x-1">
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                textAlign === "left" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTextAlign("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                textAlign === "center" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTextAlign("center")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M10 12h10m-10 6h16"
                />
              </svg>
            </button>
            <button
              className={`p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                textAlign === "right" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTextAlign("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10m-10 6h16"
                />
              </svg>
            </button>
          </div>

          {/* Undo/Redo */}
          <div className="flex items-center space-x-1">
            <button className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l-7 7 7 7M5 12h14"
                />
              </svg>
            </button>
            <button className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l7-7-7-7M19 12H5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Save Draft and Next Menu */}
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 text-sm">
            Save draft
          </button>
          <Menu
            menuButton={
              <button className="px-3 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 text-sm">
                Next
              </button>
            }
          >
            <MenuItem onClick={handleDownloadImage}>
              <button
                className="flex items-center space-x-2"
                aria-label="Download image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  className="finish-item-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.056 9.592V3.5m2.408 3.676-2.408 2.418-2.408-2.418M3.004 16.08l3.95-2.867a3.86 3.86 0 0 1 4.815.225l7.694 6.903m1.535-4.359c-.838-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316M21 11.458v5.022c0 2.945-1.843 5.022-4.788 5.022H7.778C4.833 21.502 3 19.425 3 16.48V8.533c0-2.945 1.843-5.021 4.778-5.021h3.56"
                  />
                </svg>
                <span>Download Image</span>
              </button>
            </MenuItem>
            <MenuItem onClick={handleDownloadPDF}>
              <button
                className="flex items-center space-x-2"
                aria-label="Download PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  className="finish-item-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.831 13.452V9.66c0-.544-.21-1.067-.586-1.459L15.35 4.147a2.1 2.1 0 0 0-1.519-.647H8.03a3.847 3.847 0 0 0-3.861 3.756v6.196m10.16-9.89v2.97a2.63 2.63 0 0 0 2.623 2.63h2.813M4.416 19.972h1.397a1.547 1.547 0 0 0 0-3.093H4.416v4.615m15.414-4.619h-2.506v4.626m2.12-1.927h-2.12m-5.67 1.927a2.313 2.313 0 0 0 0-4.626h-1.156v4.626z"
                  />
                </svg>
                <span>Download PDF</span>
              </button>
            </MenuItem>
            <MenuItem onClick={handlePrint}>
              <button
                className="flex items-center space-x-2"
                aria-label="Print"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  className="finish-item-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.41 18.13H6.33A3.326 3.326 0 0 1 3 14.81v-4.015a3.33 3.33 0 0 1 3.33-3.32h11.35a3.324 3.324 0 0 1 3.32 3.32v4.015a3.32 3.32 0 0 1-3.32 3.32h-1.053M7.413 15.31v3.77a2.08 2.08 0 0 0 2.08 2.08h5.015a2.08 2.08 0 0 0 2.08-2.08v-3.77m.877 0H6.537m11.124-4.258h-2.12M7.414 7.488V5.92a2.08 2.08 0 0 1 2.08-2.08h5.015a2.08 2.08 0 0 1 2.08 2.08v1.568"
                  />
                </svg>
                <span>Print</span>
              </button>
            </MenuItem>
            <MenuItem onClick={handleShare}>
              <button
                className="flex items-center space-x-2"
                aria-label="Share"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  className="finish-item-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m8.93 13.858 6.148 3.583m-.01-9.882L8.93 11.14M17.4 3.5a2.7 2.7 0 1 1 .001 5.399A2.7 2.7 0 0 1 17.4 3.5M6.6 9.8a2.7 2.7 0 1 1 .001 5.398 2.7 2.7 0 0 1 0-5.398m10.8 6.3A2.7 2.7 0 1 1 17.4 21.5 2.7 2.7 0 0 1 17.4 16.1"
                  />
                </svg>
                <span>Share</span>
              </button>
            </MenuItem>
            <MenuItem onClick={handleOrderPrints}>
              <button
                className="flex items-center space-x-2"
                aria-label="Order prints"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  className="finish-item-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m11.007 20.6 5.41-.003c2.737.007 4.583-2.241 4.583-5.006v-6.18c0-2.764-1.846-5.015-4.583-5.015H7.582C4.845 4.396 3 6.647 3 9.41v1.681m3.688-1.429 3.998 3.252c.754.598 1.82.598 2.574 0l4.033-3.252M3 14.634h3.473m-1.078 2.984H9.74m-6.45 2.985 3.17-.001"
                  />
                </svg>
                <span>Order Prints</span>
              </button>
            </MenuItem>
          </Menu>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 justify-center items-center bg-white p-4">
        <div
          className="rnd-container relative w-full h-full max-w-2xl max-h-2xl shadow-lg border border-gray-300 rounded-md overflow-hidden"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <Rnd
            default={{
              x: 20,
              y: 20,
              width: 300,
              height: 200,
            }}
            bounds="parent"
            onDragStart={handleDragStart}
            onDragStop={handleDragStop}
            onResizeStart={handleDragStart}
            onResizeStop={handleDragStop}
            style={{
              zIndex: isDragging ? 1000 : 1,
            }}
          >
            <div
              className="flex justify-center items-center w-full h-full"
              style={{
                fontFamily: font,
                fontSize: `${fontSize}px`,
                color: fontColor,
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: isUnderline ? "underline" : "none",
                textAlign: textAlign,
              }}
            >
              YOU ARE CORDIALLY INVITED
            </div>
          </Rnd>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="fixed bottom-5 right-5 flex items-center space-x-3">
        <button
          onClick={handleZoomOut}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 12h8M12 2v20"
            />
          </svg>
        </button>
        <span className="text-lg font-bold text-gray-800">{zoomLevel}x</span>
        <button
          onClick={handleZoomIn}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v8m-4-4h8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomizePage;
