import React, {useEffect, useContext} from 'react';
import {Box, Container, createTheme, Grid, Pagination, ThemeProvider, Typography} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Rightbar from "../Components/Rightbar";
import {AppContext} from "../AppContext";

const TopGames = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    let {
        fetchTopGames,
        handlePagination,
        numberOfPages,
        gamePagination
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
                          <Grid container spacing={3} mt={2}>
                              <Grid item sm={8} xs={8}>
                                  <Typography variant="h4" sx={{
                                      display: "flex",
                                      justifyContent: "center"
                                  }}>
                                      Top Games
                                  </Typography>
                                  <Grid container spacing={3} mt={5} sx={{
                                      display: "flex",
                                      justifyContent: "center"
                                  }}>
                                      <Pagination
                                          count={numberOfPages}
                                          variant="outlined"
                                          color="secondary"
                                          sx={{
                                              display: "flex",
                                              justifyContent: "center"
                                          }}
                                          onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
                                      />
                                  </Grid>
                                  <Grid container spacing={3} mt={1}>
                                      {
                                          gamePagination.map((game) =>{
                                              return (
                                                  <Cards id={ game.id } image={ game.thumbnail } title={ game.title } description={ game.short_description } />
                                              );
                                          })
                                      }
                                  </Grid>
                                  <Grid container spacing={3} mt={5} sx={{
                                      display: "flex",
                                      justifyContent: "center"
                                  }}>
                                      <Pagination
                                          count={numberOfPages}
                                          variant="outlined"
                                          color="secondary"
                                          sx={{
                                              display: "flex",
                                              justifyContent: "center"
                                          }}
                                          onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
                                      />
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

export default TopGames;