import React, {useContext, useEffect} from 'react';
import {
    Box, Button,
    Container, Divider,
    Grid,
    List, ListItem, ListItemText, Rating,
    Stack,
    ThemeProvider,
    Typography
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {AppContext} from "../AppContext";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

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

    console.log(gameDetails);

    return(
        <>
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={"text.secondary"}>
                    <Navbar/>
                    <Container>
                        <Typography variant="h3" component="h4" mt={2} mb={1}>
                            {gameDetails.title}
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item sm={8} xs={8}>
                                <div style={{ display: 'block', width: "100%", margin: "auto" }}>
                                    <Carousel>
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
                                <Stack mt={3} mb={2}>
                                    {gameDetails.description}
                                </Stack>
                                <Rating name="read-only" defaultValue={Math.floor(Math.random() * 5)} precision={0.5} readOnly/>
                            </Grid>
                            <Grid item sm={4} xs={4}>
                                <img
                                    style={{
                                        height: 250,
                                        width: "100%",
                                        alignItems: "center"
                                    }}
                                    className="img-responsive center-block"
                                    src={gameDetails.thumbnail}
                                    alt="First slide"
                                />
                                <List mt={2}>
                                    <ListItem
                                        secondaryAction={
                                            gameDetails.developer
                                        }
                                    >
                                        <ListItemText primary="Developer" sx={{ color: "gray" }}/>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem
                                        secondaryAction={
                                            gameDetails.genre
                                        }
                                    >
                                        <ListItemText primary="Genre" sx={{ color: "gray" }}/>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem
                                        secondaryAction={
                                            gameDetails.publisher
                                        }
                                    >
                                        <ListItemText primary="Publisher" sx={{ color: "gray" }}/>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem
                                        secondaryAction={
                                            gameDetails.platform
                                        }
                                    >
                                        <ListItemText primary="Platform" sx={{ color: "gray" }}/>
                                    </ListItem>
                                    <Divider light />
                                    <ListItem
                                        secondaryAction={
                                            gameDetails.release_date
                                        }
                                    >
                                        <ListItemText primary="Release Date" sx={{ color: "gray" }}/>
                                    </ListItem>
                                </List>
                                <Button
                                    href={gameDetails.game_url}
                                    variant="outlined"
                                    startIcon={<AttachMoneyIcon />}
                                    target="_blank"
                                    size="large"
                                    color="success"
                                    sx={{ width:"100%" }}
                                >
                                    Buy
                                </Button>
                                <Button
                                    startIcon={<OnlinePredictionIcon />}
                                    size="large"
                                    disabled
                                >
                                    {gameDetails.status}
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Game;