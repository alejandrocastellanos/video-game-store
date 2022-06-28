import React from 'react';
import {
    Box,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Footer from "./Footer";


function Base(){
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar/>
                <Feed/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

export { Base };