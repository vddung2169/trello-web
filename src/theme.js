import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  trelloCustome: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  // colorSchemes: {
  //   light: {
  //     // palette for light mode
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange,
  //     },
  //   },
  //   dark: {
  //     // palette for dark mode
  //     palette: {
  //       primary: cyan,
  //       secondary: orange,
  //     },
  //   },
  // },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          borderWidth: "0.5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          // ".MuiOutlinedInput-notchedOutline": {
          //   borderColor: "#000",
          // },
          // "&:hover .MuiOutlinedInput-notchedOutline": {
          //   borderColor: theme.palette.primary.main,
          // },
          "& fieldset": {
            borderWidth: "0.5px !important",
          },

          "&:hover fieldset": {
            borderWidth: "1px !important",
          },

          "&.Mui-focused fieldset": {
            borderWidth: "1px !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: "0.875rem" },
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
            background: "#dcdde1",
            borderRadius: "4px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "white",
          },
        },
      },
    },
  },
});

export default theme;
