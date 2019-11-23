import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


let fontFamily = [
  'Roboto'
].join(',')

let themeType = 'dark'

// const primaryDark = {
//   "main": "#37474F",
//   "light": "rgb(95, 107, 114)",
//   "dark": "rgb(38, 49, 55)",
//   "contrastText": "#fff"
// }

// const primaryLight = {
//   "main": "#cfd8dc",
//   "light": "#ffffff",
//   "dark": "#9ea7aa",
//   "contrastText": "#000000"
// }

// const SecondaryDark = {
//   "main": "#0277BD",
//   "light": "rgb(52, 146, 202)",
//   "dark": "rgb(1, 83, 132)",
//   "contrastText": "#fff"
// }

// const SecondaryLight = {
//   "main": "#b3e5fc",
//   "light": "#e6ffff",
//   "dark": "#82b3c9",
//   "contrastText": "#000000"
// }

let theme = createMuiTheme({
  "palette": {
    "type": themeType,
    // "background": { "paper": themeType === "dark" ? "#212121" : "#fff", "default": themeType === "dark" ? "#354147" : "#eceff1" },
    // "secondary": themeType === "dark" ? SecondaryDark : SecondaryLight,
    // "primary": themeType === "dark" ? primaryDark : primaryLight
  },
  "typography": {
    fontFamily
  },
})
  
theme = responsiveFontSizes(theme);

export { theme };

