import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4A261", // warm orange
    },
    secondary: {
      main: "#2A9D8F", // fresh teal
    },
    background: {
      default: "#FFF8F0", // soft cream background
      paper: "#F1ECE4", // card/paper surfaces
    },
    text: {
      primary: "#3A3A3A", // comfy dark gray
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
  },
});

export default theme;
