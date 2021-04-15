import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F8A45A",
    },
    secondary: {
      main: "#9B51E0",
    },
    error: {
      main: "#EB5757",
    },
    info: {
      main: "#56CCF2",
    },
    text: {
      primary: "#333333",
      secondary: "#4F4F4F",
      disabled: "#9C9C9C",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "2px",
      },
    },
  },
});
