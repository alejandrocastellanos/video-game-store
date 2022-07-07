import React, {useContext} from 'react';
import {Breadcrumbs, Container, Divider, Grid, Typography} from "@mui/material";
import Cards from "./Cards";
import Gallery from "./Gallery";
import Rightbar from "./Rightbar";
import BestGames from "./BestGames";
import {AppContext} from "../AppContext";

const Feed = () => {

    const {
        gameList,
        filterGames,
        newTag,
        platform,
        sort
    } = useContext(AppContext);

    let list = [];

    if (filterGames.length){
        list = filterGames;
    }else{
        list = gameList;
    }

    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={8}>
                        <Gallery/>
                    </Grid>
                    <Grid item sm={4} xs={4} mt={4}>
                        <BestGames/>
                    </Grid>
                </Grid>
                <Divider light width="70%" sx={{
                    margin: 'auto',
                    width: '70%',
                    background: 'lightgray'
                }}/>
                <Grid container spacing={3} mt={2}>
                    <Grid item sm={8} xs={8}>
                        <Typography variant="h5" mb="2">
                            Games
                        </Typography>
                        <Breadcrumbs aria-label="breadcrumb">
                            { newTag &&
                                <Typography color="text.secondary">
                                    {newTag.charAt(0).toUpperCase() + newTag.slice(1)}
                                </Typography>
                            }
                            { platform &&
                                <Typography color="text.secondary">
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </Typography>
                            }
                            { sort &&
                                <Typography color="text.secondary">
                                    {sort.charAt(0).toUpperCase() + sort.slice(1)}
                                </Typography>
                            }
                        </Breadcrumbs>
                        <Grid container spacing={3} mt={1}>
                            {
                                list.map((game) =>{
                                    return (
                                        <Cards id={ game.id } image={ game.thumbnail } title={ game.title } description={ game.short_description } />
                                    );
                                })
                            }
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