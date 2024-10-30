import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  trelloCustome: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      // palette for dark mode
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
});

export default theme;
