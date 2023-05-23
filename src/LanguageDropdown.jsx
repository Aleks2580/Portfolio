import React, { useState } from "react";
import style from "./LanguageDropdown.module.css";

const LanguageDropdown = ({ selectedLanguage, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`${style.button} flex items-center px-1.5 py-1 text-xs font-medium text-white bg-gray-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
        onClick={toggleDropdown}
      >
        {selectedLanguage}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <button
              type="button"
              className={`${
                selectedLanguage === "EN" ? "bg-gray-200" : ""
              } block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
              onClick={() => handleLanguageChange("EN")}
            >
              EN
            </button>
            <button
              type="button"
              className={`${
                selectedLanguage === "RU" ? "bg-gray-200" : ""
              } block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
              onClick={() => handleLanguageChange("RU")}
            >
              RU
            </button>
            <button
              type="button"
              className={`${
                selectedLanguage === "CN" ? "bg-gray-200" : ""
              } block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
              onClick={() => handleLanguageChange("CN")}
            >
              CN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
