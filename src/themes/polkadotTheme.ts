import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
//import grey from "@material-ui/core/colors/grey";

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    props: {
      MuiAppBar: {
        position: "sticky",
      },
      MuiCard: {
        elevation: 0,
      },
    },
    palette: {
      type: "dark",
      primary: {
        light: "#ff2670",
        main: "#07ffff",
        dark: "#1E0E2D",
        contrastText: "#fff",
      },
      background: {
        paper: "#383bff",
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          background: "#07ffff",
        },
      },
      MuiTextField: {
        root: {
          overflow: "visible !important",
          color: "#383bff ",
        },
      },
      MuiPaper: {
        root: {
          overflow: "visible !important",
          color: "#07ffff",
          backgroundColor: "#000000",
        },
      },
      MuiTable: {
        root: {
          color: "#ff2670 visible !important",
        },
      },
      MuiMenuItem: {
        root: {
          color: "#ff2670  !important",
        },
      },
      MuiLink: {
        root: {
          color: "linear-gradient(45deg, #383bff 30%, #07ffff  90%)",
        },
      },
      MuiTouchRipple: {
        root: {
          color: "#ff2670 visible !important",
        },
      },
      MuiButton: {
        root: {
          color: "#ff2670  !important",
        },
      },
      MuiTypography: {
        root: {
          outlineStyle: "#ff2670",
          color: "#ff2670",
        },
      },
    },
  })
);

export default {
  darkTheme,
};
