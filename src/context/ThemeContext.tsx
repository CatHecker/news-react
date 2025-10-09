import { createContext, useContext, useState, type ReactNode } from "react";

type TypeThemeContext = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TypeThemeContext | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

type ThemeProviderPropsType = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
