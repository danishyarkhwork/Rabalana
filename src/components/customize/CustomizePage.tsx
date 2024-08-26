"use client";

import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Rnd } from "react-rnd";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import ZoomControl from "@/components/layouts/ZoomControl";
import {
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiBold,
  FiItalic,
  FiUnderline,
  FiShare2,
  FiPrinter,
} from "react-icons/fi";

type TextElement = {
  font: string;
  fontSize: number;
  fontColor: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: string;
};

type ElementsState = {
  [key: string]: TextElement;
};

const CustomizePage = ({ id }: { id: string }) => {
  const [elements, setElements] = useState<ElementsState>({
    text1: {
      font: "Arial",
      fontSize: 16,
      fontColor: "#000000",
      isBold: false,
      isItalic: false,
      isUnderline: false,
      textAlign: "center",
    },
    text2: {
      font: "Arial",
      fontSize: 16,
      fontColor: "#000000",
      isBold: false,
      isItalic: false,
      isUnderline: false,
      textAlign: "center",
    },
  });

  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleStyleChange = (
    styleKey: keyof TextElement,
    value: string | number | boolean
  ) => {
    if (!selectedTextId) return;
    setElements((prevElements) => ({
      ...prevElements,
      [selectedTextId]: {
        ...prevElements[selectedTextId],
        [styleKey]: value,
      },
    }));
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleDownloadImage = async () => {
    setIsLoading(true);
    const element = document.querySelector(".rnd-container");
    if (!element) {
      setIsLoading(false);
      console.error("Element not found");
      return;
    }

    try {
      const dataUrl = await domtoimage.toPng(element);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "template.png";
      link.click();

      setShowSuccessPopup(true);
    } catch (error) {
      console.error("An error occurred while downloading the image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    const element = document.querySelector(".rnd-container");
    if (!element) {
      setIsLoading(false);
      console.error("Element not found");
      return;
    }

    try {
      const imgData = await domtoimage.toPng(element);
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("template.pdf");

      setShowSuccessPopup(true);
    } catch (error) {
      console.error("An error occurred while downloading the PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    const element = document.querySelector(".rnd-container");
    if (!element) return;

    const newWindow = window.open();
    newWindow!.document.write(element.outerHTML);
    newWindow!.document.close();
    newWindow!.focus();
    newWindow!.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my design!",
          url: window.location.href,
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  const handleTextClick = (id: string) => {
    setSelectedTextId(id);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const textStyles = (id: string) => {
    const element = elements[id];
    return {
      fontFamily: element.font,
      fontSize: `${element.fontSize}px`,
      color: element.fontColor,
      fontWeight: element.isBold ? "bold" : "normal",
      fontStyle: element.isItalic ? "italic" : "normal",
      textDecoration: element.isUnderline ? "underline" : "none",
      textAlign: element.textAlign as "left" | "center" | "right",
    };
  };

  return (
    <div className="h-screen flex flex-col mt-16 customize-page">
      {/* Top Toolbar */}
      <div className="flex z-20 sticky top-0 justify-between items-center bg-toolbar px-4 py-2 shadow-md rounded-lg mx-4 mt-4">
        <div className="flex items-center space-x-3">
          <select
            value={selectedTextId ? elements[selectedTextId].font : "Arial"}
            onChange={(e) => handleStyleChange("font", e.target.value)}
            className="p-1 border rounded-md shadow-sm text-sm"
            disabled={!selectedTextId}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => {
                if (selectedTextId) {
                  handleStyleChange(
                    "fontSize",
                    elements[selectedTextId].fontSize - 1
                  );
                }
              }}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 text-sm"
              disabled={!selectedTextId}
            >
              -
            </button>
            <span className="font-semibold text-sm">
              {selectedTextId ? elements[selectedTextId].fontSize : ""}
            </span>
            <button
              onClick={() => {
                if (selectedTextId) {
                  handleStyleChange(
                    "fontSize",
                    elements[selectedTextId].fontSize + 1
                  );
                }
              }}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 text-sm"
              disabled={!selectedTextId}
            >
              +
            </button>
          </div>

          <div className="relative">
            <button
              onClick={toggleColorPicker}
              className="p-1 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
              disabled={!selectedTextId}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: selectedTextId
                    ? elements[selectedTextId].fontColor
                    : "#000",
                }}
              ></div>
            </button>
            {showColorPicker && selectedTextId && (
              <div className="absolute mt-2 z-50">
                <SketchPicker
                  color={elements[selectedTextId].fontColor}
                  onChange={(color) =>
                    handleStyleChange("fontColor", color.hex)
                  }
                />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 text-sm ${
                selectedTextId && elements[selectedTextId].isBold
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (selectedTextId) {
                  handleStyleChange("isBold", !elements[selectedTextId].isBold);
                }
              }}
              disabled={!selectedTextId}
            >
              <FiBold />
            </button>
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 italic text-sm ${
                selectedTextId && elements[selectedTextId].isItalic
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (selectedTextId) {
                  handleStyleChange(
                    "isItalic",
                    !elements[selectedTextId].isItalic
                  );
                }
              }}
              disabled={!selectedTextId}
            >
              <FiItalic />
            </button>
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 underline text-sm ${
                selectedTextId && elements[selectedTextId].isUnderline
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => {
                if (selectedTextId) {
                  handleStyleChange(
                    "isUnderline",
                    !elements[selectedTextId].isUnderline
                  );
                }
              }}
              disabled={!selectedTextId}
            >
              <FiUnderline />
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                selectedTextId && elements[selectedTextId].textAlign === "left"
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => handleStyleChange("textAlign", "left")}
              disabled={!selectedTextId}
            >
              <FiAlignLeft />
            </button>
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                selectedTextId &&
                elements[selectedTextId].textAlign === "center"
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => handleStyleChange("textAlign", "center")}
              disabled={!selectedTextId}
            >
              <FiAlignCenter />
            </button>
            <button
              className={`p-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 ${
                selectedTextId && elements[selectedTextId].textAlign === "right"
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => handleStyleChange("textAlign", "right")}
              disabled={!selectedTextId}
            >
              <FiAlignRight />
            </button>
          </div>
        </div>

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
                <FiPrinter />
                <span>Print</span>
              </button>
            </MenuItem>
            <MenuItem onClick={handleShare}>
              <button
                className="flex items-center space-x-2"
                aria-label="Share"
              >
                <FiShare2 />
                <span>Share</span>
              </button>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Content Area */}
      <div className="flex flex-1 justify-center items-center bg-page-background p-4">
        <div
          className="rnd-container relative w-full h-full z-10 max-w-2xl max-h-2xl shadow-lg border border-gray-300 rounded-md overflow-hidden bg-white"
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
            onClick={() => handleTextClick("text1")}
            style={{
              zIndex: selectedTextId === "text1" ? 1000 : 1,
              border: selectedTextId === "text1" ? "1px dotted gray" : "none",
            }}
          >
            <motion.div
              className="flex justify-center items-center w-full h-full"
              style={textStyles("text1")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              YOU ARE CORDIALLY INVITED
            </motion.div>
          </Rnd>

          <Rnd
            default={{
              x: 50,
              y: 150,
              width: 300,
              height: 200,
            }}
            bounds="parent"
            onClick={() => handleTextClick("text2")}
            style={{
              zIndex: selectedTextId === "text2" ? 1000 : 1,
              border: selectedTextId === "text2" ? "1px dotted gray" : "none",
            }}
          >
            <motion.div
              className="flex justify-center items-center w-full h-full"
              style={textStyles("text2")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              YOU ARE CORDIALLY INVITED
            </motion.div>
          </Rnd>
        </div>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 border-t-green-500 animate-spin"></div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50"
          style={{ zIndex: 501 }}
        >
          <div className="modal-content bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="header flex justify-end">
              <button
                className="modal-close-button gi-icon-button small btn-icon-neutral"
                onClick={closeSuccessPopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m6 6.4 12 12m0-12-12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="panel-success-message text-center"
              data-testid="panel-success-message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="72"
                fill="none"
                className="mt-3 justify-center items-center mx-auto"
              >
                <path
                  stroke="#1BC47D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M13.134 19.966c0-4.05 3.28-7.33 7.33-7.333H23.8a7.34 7.34 0 0 0 5.164-2.13l2.33-2.334a7.335 7.335 0 0 1 10.371-.032l.003.003.03.026 2.334 2.334a7.32 7.32 0 0 0 5.164 2.13h3.342a7.334 7.334 0 0 1 7.333 7.333v3.332c0 1.939.765 3.793 2.13 5.168l2.334 2.334a7.336 7.336 0 0 1 .036 10.37l-2.367 2.367a7.32 7.32 0 0 0-2.13 5.161v3.345a7.33 7.33 0 0 1-7.336 7.32H49.19a7.32 7.32 0 0 0-5.164 2.134l-2.334 2.33a7.33 7.33 0 0 1-10.364.046l-.01-.007M20.464 59.37a7.33 7.33 0 0 1-7.33-7.33v-3.352c0-1.935-.768-3.79-2.133-5.16l-2.33-2.335a7.327 7.327 0 0 1-.05-10.36s.01-.007.013-.013l2.36-2.364a7.33 7.33 0 0 0 2.134-5.167v-3.323"
                ></path>
                <path
                  stroke="#1BC47D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m26.512 36.406 6.59 6.6L46.68 29.423"
                ></path>
              </svg>
              <h3 className="title mt-4 text-2xl font-semibold">Nice work!</h3>
              <h3 className="title mt-4 text-2xl font-semibold">
                Your design is saved!
              </h3>
              <div className="description text-body mt-2">
                Download should start automatically. If it does not,{" "}
                <button
                  className="link-no-underline text-green-600"
                  onClick={handleDownloadImage}
                >
                  download again
                </button>
              </div>
              <button
                className="w-full mt-6 bg-green-500 text-white rounded-md py-2 hover:bg-green-600"
                aria-label="Back"
                onClick={closeSuccessPopup}
              >
                Back to design
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Zoom Controls */}
      <ZoomControl zoomLevel={zoomLevel} onZoomChange={setZoomLevel} />
    </div>
  );
};

export default CustomizePage;
