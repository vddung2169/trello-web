import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import {
  experimental_extendTheme as extendTheme,
  hexToRgb,
} from "@mui/material/styles";

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
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
            "& fieldset": {
              borderWidth: "1px !important",
            },
          };
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#bdc3c7",
            borderRadius: "4px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "#00b894",
          },
        },
      },
    },
  },
});

export default theme;
