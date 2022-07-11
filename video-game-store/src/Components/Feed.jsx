import React, {useContext} from 'react';
import {Box, Breadcrumbs, Container, Divider, Grid, Pagination, Stack, Typography} from "@mui/material";
import Cards from "./Cards";
import Gallery from "./Gallery";
import Rightbar from "./Rightbar";
import BestGames from "./BestGames";
import {AppContext} from "../AppContext";
import Loader from "./Loader";

const Feed = () => {

    const {
        newTag,
        platform,
        sort,
        loading,
        handlePagination,
        numberOfPages,
        gamePagination
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
                    <Grid item xs={1} md={2}>
                        <BestGames/>
                    </Grid>
                </Grid>
                <Divider light width="70%" sx={{
                    margin: 'auto',
                    width: '70%',
                    background: 'lightgray'
                }}/>
                <Stack direction="row" justifyContent="space-between">
                    <Box flex={4} p={2}>
                        {
                            loading ?
                                <div style={{ marginTop: '-70px'}}>
                                    <Loader/>
                                </div>
                                :
                                <>
                                    <Typography variant="h4" mb="2" sx={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                        GAMES
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
                                    <Grid container spacing={3} mt={5} sx={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                        <Pagination
                                            count={numberOfPages}
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
                                            color="secondary"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                            onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
                                        />
                                    </Grid>
                                </>
                        }
                    </Box>
                    <Box
                        flex={2}
                        p={2}
                        sx={{ display: { xs: "none", sm: "block"}}}
                    >
                        <Rightbar/>
                    </Box>
                </Stack>
            </Container>
        </>
    );
}

export default Feed;