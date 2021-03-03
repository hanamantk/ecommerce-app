
import { createMuiTheme  } from "@material-ui/core/styles";
const green1 = "#04C51C";
const green2 = "#4CE45F";
const green3 = "#98F7A4";
const darkGrey='#565251';
const grey = "#C8C8C8";
const lightGrey='#D5D3D2';
const white = "#FFFFFF";
const mediumGrey='#565656';
const darkRed='#B12704';

const theme = createMuiTheme({
  palette: {
    common: {
      grey: grey,
      lightGrey:lightGrey,
      darkRed:darkRed,
      green2:green2,
      green1:green1
    },
    primary: {
      main: green2,
      dark:mediumGrey
    },
    secondary: {
      main: green3,
    },
    ternary:{
      main:darkRed
    },
    info :{
      main:mediumGrey
    }
  },
  typography: {
    fontWeightRegular: 400,
     fontWeightMedium: 600,
     fontWeightBold: 700,
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h5:{
      fontSize: "1rem",
      color:darkGrey,
      fontWeight: 600,
    }
  },
  spacing: 16,
  overrides: {
    MuiTextField: {
      root: {
        marginBottom: "16px",
        "& label.Mui-focused": {
          color: green1,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: green1,
          },
          "&.Mui-focused fieldset": {
            borderColor: green3,
          },
        },
      },
    },
    MuiTypography: {
      root: {
        marginBottom: "1rem",
      },
    },
    MuiButton: {
      root: {
        marginBottom: "1rem",
      },
      contained: {
        color: 'white !important',
      },
    },
    MuiAlert:{
      root:{
        '& .MuiSvgIcon-root':{ 
          fontSize:'1.5rem !important'
        }
      }
      
    },
    MuiCheckbox:{
      root:{
        '& .MuiSvgIcon-root':{ 
          fontSize:'1.5rem !important'
        }
      }
      
    }
  },
});
export default theme;
