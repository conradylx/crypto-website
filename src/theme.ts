import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "'Lora', sans-serif",
  },
  palette: {
    primary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
    },
    secondary: {
      main: "#00C4FF",
    },
  },
});
