import React from 'react';
import {Container, Grid} from "@mui/material";
import Cards from "./Cards";
import Gallery from "./Gallery";

const Feed = () => {
    return (
        <>
            <Gallery/>
            <Container>
                <Grid container spacing={3}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </Grid>
            </Container>
        </>
    );
}

export default Feed;