import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import './auth.css'

const defaultTheme = createTheme();

const ForgotPassword = () => {
  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" id="auth">
                <CssBaseline />
                <Box sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:"max-content" , 
                    borderRadius: 5,
                    mt:1, boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', 
                    padding: 5, margin:5
                }}>
                    
                </Box>
            </Container>
        </ThemeProvider>
    </>
  )
}

export default ForgotPassword