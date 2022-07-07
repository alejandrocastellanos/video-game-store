import React, {useContext} from 'react';
import {
    Box,
    ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Footer from "./Footer";
import {AppContext} from "../AppContext";


function Base(){

    let {
        darkTheme
    } = useContext(AppContext);

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