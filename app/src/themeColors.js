const themeColors = require("./colors.module.scss");

const THEME = "app_theme";
const DEFAULT_THEME = "light";

export function getThemes() {
  return themeColors.themes.split(", ");
}

export function getCurrentTheme() {
  return localStorage.getItem(THEME) || DEFAULT_THEME;
}
