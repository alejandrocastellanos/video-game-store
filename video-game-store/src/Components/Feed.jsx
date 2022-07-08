import React, {useContext} from 'react';
import {Breadcrumbs, Container, Divider, Grid, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Cards from "./Cards";
import Gallery from "./Gallery";
import Rightbar from "./Rightbar";
import BestGames from "./BestGames";
import {AppContext} from "../AppContext";

const Feed = () => {

    const {
        filterGames,
        newTag,
        platform,
        sort,
        loading
    } = useContext(AppContext);

    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={8}>
                        {
                            loading ?
                                <div className="d-flex justify-content-center" style={{ fontFamily: "arial",
                                    fontSize: "24px",
                                    margin: "25px",
                                    width: "800px",
                                    height: "400px",
                                    position: "relative"
                                }}>
                                    <CircularProgress
                                        disableShrink
                                        color="secondary"
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            margin: "-25px 0 0 -25px",
                                        }}
                                        size={50}
                                    />
                                </div>
                                :
                                <Gallery/>
                        }
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
                                filterGames.map((game) =>{
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