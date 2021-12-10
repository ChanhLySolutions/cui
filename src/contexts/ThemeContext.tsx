import React, { useState } from 'react';

export interface Theme {
  size: Size;
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export type Size = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

const defaultTheme: Theme = {
  size: 'medium',
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
  );
};
