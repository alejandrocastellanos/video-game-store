import React from 'react';
import {
    Box,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import Feed from "./Feed";


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
            </Box>
        </ThemeProvider>
    );
}

export { Base };