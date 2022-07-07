import React from 'react';
import {Box, Container, createTheme, Grid, ThemeProvider, Typography} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Rightbar from "../Components/Rightbar";

const NewGames = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return(
        <>
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Navbar/>
                    <Container>
                        <Grid container spacing={3} mt={2}>
                            <Grid item sm={8} xs={8}>
                                <Typography variant="h6">
                                    New Games
                                </Typography>
                                <Grid container spacing={3} mt={1}>
                                    <Cards/>
                                    <Cards/>
                                    <Cards/>
                                    <Cards/>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={4}>
                                <Rightbar/>
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default NewGames;