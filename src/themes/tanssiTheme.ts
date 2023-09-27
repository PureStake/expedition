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
        light: "#189B9B",
        main: "#FF8055",
        dark: "#1E0E2D",
        contrastText: "#fff",
      },
      background: {
        paper: "#E1147B",
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          background: "#FF8055",
        },
      },
      MuiTextField: {
        root: {
          overflow: "visible !important",
          color: "#E1147B ",
        },
      },
      MuiPaper: {
        root: {
          overflow: "visible !important",
          color: "#FF8055",
          backgroundColor: "#000000",
        },
      },
      MuiTable: {
        root: {
          color: "#189B9B visible !important",
        },
      },
      MuiMenuItem: {
        root: {
          color: "#52CBC9  !important",
        },
      },
      MuiLink: {
        root: {
          color: "linear-gradient(45deg, #E1147B 30%, #FF8055  90%)",
        },
      },
      MuiTouchRipple: {
        root: {
          color: "#189B9B visible !important",
        },
      },
      MuiButton: {
        root: {
          color: "#189B9B  !important",
        },
      },
      MuiTypography: {
        root: {
          outlineStyle: "#189B9B",
          color: "#189B9B",
        },
      },
    },
  })
);

export default {
  darkTheme,
};
