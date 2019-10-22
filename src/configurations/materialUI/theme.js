import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


let fontFamily = [
  'Roboto',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

let theme = createMuiTheme({
  "palette": {
    "type": "dark",
    "tonalOffset": 0.2,
    "background": { "paper": "#fff", "default": "#fafafa" },
    "contrastThreshold": 3,
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A700": "#616161",
      "A100": "#d5d5d5",
      "A400": "#303030",
      "A200": "#aaaaaa"
    },
    "text": {
      "primary": "rgba(255,255,255, 0.87)",
      "secondary": "rgba(255,255,255, 0.54)",
      "disabled": "rgba(255,255,255, 0.38)",
      "hint": "rgba(255,255,255, 0.38)"
    },
    "divider": "rgba(0, 0, 0, 0.12)",
    "secondary": {
      "main": "#0277BD",
      "light": "rgb(52, 146, 202)",
      "dark": "rgb(1, 83, 132)",
      "contrastText": "#fff"
    },
    "common": { "black": "#000", "white": "#fff" },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "action": {
      "hoverOpacity": 0.08,
      "hover": "rgba(0, 0, 0, 0.08)",
      "selected": "rgba(0, 0, 0, 0.14)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabled": "rgba(0, 0, 0, 0.26)",
      "active": "rgba(0, 0, 0, 0.54)"
    },
    "primary": {
      "main": "#37474F",
      "light": "rgb(95, 107, 114)",
      "dark": "rgb(38, 49, 55)",
      "contrastText": "#fff"
    }
  },
  "typography": {
    fontFamily
  },
})
  
theme = responsiveFontSizes(theme);

export { theme };

