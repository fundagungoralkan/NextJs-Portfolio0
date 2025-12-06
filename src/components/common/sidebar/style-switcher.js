"use client";
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { useColor } from "@/context/ThemeProviderWrapper";
import "./style-switcher.scss";
const StyleSwitcher = () => {
  const { color, changeColor, isMounted } = useColor();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // localStorage'dan tema tercihini al
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-mode') || 'light';
    }
    return 'light';
  });
  // İlk yüklemede tema tercihini uygula
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  const toggleDayNight = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // HTML root elementine tema attribute'unu ekle
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme-mode', newTheme);
    } catch (e) {
      console.error('LocalStorage error:', e);
    }
  };
  if (!isMounted) {
    return null;
  }
  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ImSpinner6 />
      </div>
      <div className="day-night s-icon" onClick={toggleDayNight}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {["color-1", "color-2", "color-3", "color-4", "color-5"].map((c) => (
          <span
            key={c}
            className={c}
            onClick={() => changeColor(c)}
            data-active={c === color}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default StyleSwitcher;