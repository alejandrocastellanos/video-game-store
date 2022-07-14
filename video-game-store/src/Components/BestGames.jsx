import React from 'react';
import {Box, Card, CardContent, CardMedia, Rating, Typography} from "@mui/material";


const BestGames = () => {

    return(
        <>
            <Card sx={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            The legend of zelda
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Breath of the wild
                            <Rating name="read-only" value="5" readOnly />
                        </Typography>

                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://images.alphacoders.com/789/thumb-1920-789452.jpg"
                    alt="Live from space album cover"
                />
            </Card>
            <Card sx={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            God of War
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Ragnarok
                            <Rating name="read-only" defaultValue={4.5} precision={0.5} readOnly />
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://images.alphacoders.com/117/1173124.jpg"
                    alt="Live from space album cover"
                />
            </Card>
            <Card sx={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Destiny 2
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            The Witch Queen
                            <Rating name="read-only" value="4" readOnly />
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://p4.wallpaperbetter.com/wallpaper/971/756/853/destiny-2-cayde-6-wallpaper-preview.jpg"
                    alt="Live from space album cover"
                />
            </Card>
        </>
    )
}

export default BestGames;