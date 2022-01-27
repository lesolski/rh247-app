// ./constants/Theme.js
import { DarkTheme as DT, DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(66, 103, 178)",
    background: "rgb(245,245,245)",
    foreground: "rgb(255, 255, 255)",
    text: "rgb(18, 18, 18)",
    contrast_text: "rgb(33,33,33)",
    title: "rgb(18, 18, 18)",
    headerAndTabs: "rgb(66, 103, 178)",
    headerText: "rgb(255, 255, 255)"
    }
};

export const DarkTheme = {
  ...DT,
  colors: {
    ...DT.colors,
    primary: "rgb(29,185,84)",
    background: "rgb(33,33,33)",
    foreground: "rgb(18, 18, 18)",
    text: "rgb(179, 179, 179)",
    contrast_text: "rgb(255,255,255)",
    title: "rgb(150, 150, 150)",
    headerAndTabs: "rgb(18, 18, 18)",
    headerText: "rgb(29,185,83)"
  }
};

console.log(DarkTheme);
