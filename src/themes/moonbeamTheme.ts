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
        light: "#07D3BA",
        main: "#D9254D",
        dark: "#2B1D3C",
        contrastText: "#fff",
      },
      background: {
        paper: "#D9254D",
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          background: "#D9254D",
        },
      },
      MuiTextField: {
        root: {
          overflow: "visible !important",
          color: "#D9254D ",
        },
      },
      MuiPaper: {
        root: {
          overflow: "visible !important",
          color: "#D9254D",
          backgroundColor: "#000000",
        },
      },
      MuiTable: {
        root: {
          color: "#07D3BA visible !important",
        },
      },
      MuiMenuItem: {
        root: {
          color: "#07D3BA  !important",
        },
      },
      MuiLink: {
        root: {
          color: "linear-gradient(45deg, #D9254D 30%, #EA5AA2  90%)",
        },
      },
      MuiTouchRipple: {
        root: {
          color: "#07D3BA visible !important",
        },
      },
      MuiButton: {
        root: {
          color: "#07D3BA  !important",
        },
      },
      MuiTypography: {
        root: {
          outlineStyle: "#07D3BA",
          color: "#07D3BA",
        },
      },
    },
  })
);

export default {
  darkTheme,
};
