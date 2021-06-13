import { createContext, useState, useCallback } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};