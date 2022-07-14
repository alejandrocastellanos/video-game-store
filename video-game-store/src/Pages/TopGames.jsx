import React, {useEffect, useContext} from 'react';
import {
    Box,
    Container,
    createTheme,
    ThemeProvider, Typography,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {AppContext} from "../AppContext";
import ListGames from "../Components/ListGames";

const TopGames = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    let {
        fetchTopGames,
    } = useContext(AppContext);

    useEffect(() => {
        fetchTopGames();
    }, []);


    return(
          <>
              <ThemeProvider theme={darkTheme}>
                  <Box bgcolor={"background.default"} color={"text.primary"}>
                      <Navbar/>
                      <Container>
                          <Typography mt={2} variant="h4" component="div" sx={{
                              display: "flex",
                              justifyContent: "center"
                          }}>
                              Top VideoGames
                          </Typography>
                          <ListGames/>
                      </Container>
                      <Footer/>
                  </Box>
              </ThemeProvider>
          </>
    )
}

export default TopGames;