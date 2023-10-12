import { ReactNode, createContext, useState, FC, useEffect } from "react";

import { StorageKeys } from "@keys/stoarge.keys";
import { getLocalStorage, setLocalStorage } from "@helpers/storage.helpers";
import { ThemeKeys } from "@types_/constants.enums";

type Theme = ThemeKeys;

interface IThemeProvider {
  children: ReactNode,
  defaultTheme?: Theme,
  storageKey?: string,
}

type ThemeProviderState = {
  theme: ThemeKeys;
  setTheme: (theme: Theme) => void;
}

const intialState: ThemeProviderState = {
  theme: ThemeKeys.SYSTEM,
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(intialState);

export const ThemProvider: FC<IThemeProvider> = (props) => {
  const { children, defaultTheme = ThemeKeys.SYSTEM, storageKey = StorageKeys.UI_THEME } = props;
  const [theme, setTheme] = useState<Theme>(() => (getLocalStorage(storageKey) as Theme) || defaultTheme);

  const onChangeSetTheme = (): void => {
    const root = window.document.documentElement;
    root.classList.remove(ThemeKeys.DARK, ThemeKeys.LIGHT);

    if (theme === ThemeKeys.SYSTEM) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? ThemeKeys.DARK
        : ThemeKeys.LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  };

  useEffect(onChangeSetTheme, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setLocalStorage(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProviderContext;