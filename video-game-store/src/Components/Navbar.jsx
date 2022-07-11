import React from 'react';
import {AppBar, Box, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WhatshotIcon from '@mui/icons-material/Whatshot';
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
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <Button
                                startIcon={<HomeIcon color="error" />}
                                variant="text"
                                sx={{ color:"white" }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Button
                            startIcon={<WhatshotIcon color="error" />}
                            variant="text"
                            sx={{ color:"white" }}
                        >
                            <Link to="/top-games" style={{ textDecoration: 'none', color: 'white' }}>Top Games</Link>
                        </Button>
                    </Icons>
                </StyleToolbar>
            </AppBar>
        </>
    );
}

export default Navbar;