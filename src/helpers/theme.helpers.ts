/* eslint-disable no-unused-vars */

export enum Themes {
  DARK = "dark",
  LIGHT = "light",
  DEFAULT = "default",
}

export function setTheme(theme: string = Themes.DEFAULT): void {
  const currentTheme: string | null = localStorage.getItem("theme");

  if (theme === Themes.DEFAULT) {
    // Check if a theme is provided; if not, use the stored theme or the user's system preference
    //to avoid the FOUC-(Flash of Unstyled Content)
    if (
      currentTheme === Themes.DARK ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      theme = Themes.DARK;
    } else {
      theme = Themes.LIGHT;
    }
  }

  // Add or remove the 'dark' class based on the selected theme
  if (theme === Themes.DARK) {
    document.documentElement.classList.add(Themes.DARK);
  } else {
    document.documentElement.classList.remove(Themes.LIGHT);
  }

  // Store the selected theme in localStorage
  localStorage.setItem("theme", theme);
}
