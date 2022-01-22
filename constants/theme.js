// ./constants/theme.js 

import { DarkTheme } from "@react-navigation/native";
import COLORS from './colors';

// THEME SETTINGS
//
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background:COLORS.background 
  }
};

export default MyTheme;
