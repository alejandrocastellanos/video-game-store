import React, {useContext} from 'react';
import {Container, Divider, Grid} from "@mui/material";
import Gallery from "./Gallery";
import BestGames from "./BestGames";
import {AppContext} from "../AppContext";
import Loader from "./Loader";
import ListGames from "./ListGames";

const Feed = () => {

    const {
        loading,
    } = useContext(AppContext);

    return (
        <>
            <Container>

                <Grid container columns={{ xs: 1, md: 8 }}>
                    <Grid item xs={1} md={6}>
                        {
                            loading ?
                                <Loader/>
                                :
                                <Gallery/>
                        }
                    </Grid>
                    <Grid item xs={1} md={2} mt={2} sx={{ display: { xs: "none", sm: "none", md: "block"}}}>
                        <BestGames/>
                    </Grid>
                </Grid>
                <Divider light width="70%" sx={{
                    margin: 'auto',
                    width: '70%',
                    background: 'lightgray'
                }}/>
                <ListGames/>
            </Container>
        </>
    );
}

export default Feed;