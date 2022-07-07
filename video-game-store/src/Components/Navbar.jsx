import React from 'react';
import {AppBar, Box, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";

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
        <>
            <AppBar position="sticky">
                <StyleToolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><SportsEsportsIcon /></Link>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        VideoGame Store
                    </Typography>
                    <Icons>
                        <Button
                            startIcon={<HomeIcon color="error" />}
                            variant="text"
                            sx={{ color:"white" }}
                        >
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        </Button>
                        <Button
                            startIcon={<WhatshotIcon color="error" />}
                            variant="text"
                            sx={{ color:"white" }}
                        >
                            <Link to="/top-games" style={{ textDecoration: 'none', color: 'white' }}>Top Games</Link>
                        </Button>
                        <Button
                            startIcon={<NewReleasesIcon color="secondary" />}
                            variant="text"
                            sx={{ color:"white" }}
                        >
                            <Link to="/new-games" style={{ textDecoration: 'none', color: 'white' }}>New Games</Link>
                        </Button>
                        <Button
                            startIcon={<MoneyOffIcon color="warning" />}
                            variant="text"
                            sx={{ color:"white" }}
                        >
                            <Link to="/pc-games" style={{ textDecoration: 'none', color: 'white' }}>PC Games</Link>
                        </Button>
                    </Icons>
                </StyleToolbar>
            </AppBar>
        </>
    );
}

export default Navbar;