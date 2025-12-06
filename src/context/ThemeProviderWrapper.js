"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

const ColorContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [color, setColor] = useState("color-1");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedColor = localStorage.getItem("theme-color") || "color-1";
    setColor(savedColor);
    document.documentElement.setAttribute("data-color", savedColor);

    // Burada mounted olduktan sonra göster
    setIsMounted(true);
  }, []);

  const changeColor = (newColor) => {
    setColor(newColor);
    document.documentElement.setAttribute("data-color", newColor);
    localStorage.setItem("theme-color", newColor);
  };

  // **Hydration sorunu için isMounted kontrolü**
  if (!isMounted) {
    return null; // veya loading gösterebilirsin
  }

  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ColorContext.Provider value={{ color, changeColor, isMounted }}>
        {children}
      </ColorContext.Provider>
    </NextThemeProvider>
  );
}

export const useColor = () => useContext(ColorContext);
