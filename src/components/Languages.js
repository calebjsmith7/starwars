import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Languages(props) {
    
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '9%', position: 'absolute', top: 90, right: 90, justifyContent: 'space-between'}}>
        <ThemeProvider theme={theme}>
        <Button variant="outlined" size='small' color="primary" onClick={()=>{props.lang == "English" ? console.log('already english') : props.setLang('English')}}>English</Button>
        <Button variant="outlined" size='small' color="primary" onClick={()=>{props.lang == "Wookie" ? console.log('already wookie') : props.setLang('Wookie')}}>Wookie</Button>
        </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ffffff',
        darker: '#ffffff',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });



export default Languages;