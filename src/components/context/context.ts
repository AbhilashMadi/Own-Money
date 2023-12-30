import { useContext } from "react";

import { AppContext } from "@context/AppContext";
import { ThemeProviderContext } from "@context/ThemeProvider";

//Theme Context return theme,setTheme
export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

//AppContext which intially returns state, dispatch to update the state
export function useData() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useData must be used within a ContextProvider");
  }

  return context;
}
