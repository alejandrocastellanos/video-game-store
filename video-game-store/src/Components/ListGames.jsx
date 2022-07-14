import React, {useContext} from 'react';
import {Box, Breadcrumbs, Grid, Pagination, Stack, Typography} from "@mui/material";
import Loader from "./Loader";
import Cards from "./Cards";
import Rightbar from "./Rightbar";
import {AppContext} from "../AppContext";

const ListGames = () => {

    const {
        newTag,
        platform,
        sort,
        loading,
        handlePagination,
        numberOfPages,
        gamePagination
    } = useContext(AppContext);

    return(
        <>
            <Stack direction="row" justifyContent="space-between">
                <Box flex={4} p={2}>
                    {
                        loading ?
                            <div style={{ marginTop: '-70px'}}>
                                <Loader/>
                            </div>
                            :
                            <>
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
                    sx={{ display: { xs: "none", sm: "none", md: "block"}}}
                >
                    <Rightbar/>
                </Box>
            </Stack>
        </>
    )
}

export default ListGames