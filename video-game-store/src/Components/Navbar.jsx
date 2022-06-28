import React from 'react';
import {AppBar, Box, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Icons = styled(Box)(({theme}) =>({
    display: "flex",
    gap: "20px",
    alignItems: "center"
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyleToolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <SportsEsportsIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    VideoGame Store
                </Typography>
                <Icons>
                    <Button
                        startIcon={<WhatshotIcon color="error" />}
                        variant="text"
                        sx={{ color:"white" }}
                    >
                        Top Games
                    </Button>
                    <Button
                        startIcon={<NewReleasesIcon color="secondary" />}
                        variant="text"
                        sx={{ color:"white" }}
                    >
                        New Games
                    </Button>
                    <Button
                        startIcon={<MoneyOffIcon color="warning" />}
                        variant="text"
                        sx={{ color:"white" }}
                    >
                        Free Games
                    </Button>
                </Icons>
            </StyleToolbar>
        </AppBar>
    );
}

export default Navbar;