import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Cards from "./Cards";
import Gallery from "./Gallery";
import Rightbar from "./Rightbar";

const Feed = () => {
    return (
        <>
            <Container>
                <Gallery/>
                <Grid container spacing={3} mt={2}>
                    <Grid item sm={8} xs={8}>
                        <Typography variant="h6">
                            Games
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
        </>
    );
}

export default Feed;