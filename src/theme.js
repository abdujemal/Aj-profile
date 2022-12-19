import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        }
      },
    palette:{
        primary:{
            main: '#ffbd39'
        },
        secondary:{
            main: '#a0f669'
        },
        white:{
            main: '#ffffff'
        },
        black:{
            main: "#000000"
        },
        darken:{
            main: '#232931'
        }
    }
})