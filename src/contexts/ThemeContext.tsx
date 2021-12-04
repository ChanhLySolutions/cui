import React, { useState } from 'react';

export interface Theme {
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}

const defaultTheme: Theme = {
  size: 'medium',
};

export const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}>({
  theme: defaultTheme,
});

export const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
  );
};
