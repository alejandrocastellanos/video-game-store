import React, {useContext, useEffect} from 'react';
import {Box, Card, CardMedia, Container, ThemeProvider} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {AppContext} from "../AppContext";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Cards from "../Components/Cards";

const Game = () => {

    let { id } = useParams();

    let {
        fetchGame,
        gameDetails,
        darkTheme
    } = useContext(AppContext);

    useEffect(() => {
        fetchGame(id);
    }, [id]);

    return(
        <>
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Navbar/>
                    <Container>
                        <div style={{ display: 'block', width: "100%", margin: "auto" }}>
                            <Carousel style={{ marginTop: "20px", background:"red"}}>
                                { gameDetails.screenshots &&
                                    gameDetails.screenshots.map((game) =>{
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    style={{
                                                        height: 500,
                                                        width: "100%",
                                                        alignItems: "center"
                                                    }}
                                                    className="img-responsive center-block"
                                                    src={game.image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }

                            </Carousel>
                        </div>
                    </Container>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Game;