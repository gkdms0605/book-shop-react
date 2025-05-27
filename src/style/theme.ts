export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

export interface Theme {
  name: ThemeName
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgray",
    secondary: "blue",
    third: "green"
  },
} as const;

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen"
  },
} as const;


export const getThemeName = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
}