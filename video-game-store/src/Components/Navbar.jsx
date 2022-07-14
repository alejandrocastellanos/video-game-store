import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    ListItemButton,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import Rightbar from "./Rightbar";

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

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };

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
                    <Typography variant="h6" component="div" sx={{ display: { xs: "none", sm: "none", md: "block"}, flexGrow: 1}}>
                        VideoGame Store
                    </Typography>
                    <Icons sx={{ display: { sm: "block", md: "none"}}}>
                        <Button
                            variant="text"
                            sx={{ color:"white" }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </Button>
                        <Drawer
                            //from which side the drawer slides in
                            anchor="right"
                            //if open is true --> drawer is shown
                            open={open}
                            //function that is called when the drawer should close
                            onClose={toggleDrawer(false)}
                            //function that is called when the drawer should open
                            onOpen={toggleDrawer(true)}
                        >
                            {/* The inside of the drawer */}
                            <Box
                                sx={{
                                    p: 2,
                                    height: 2,
                                }}
                            >
                                <IconButton sx={{ mb: 2 }}>
                                    <CloseIcon onClick={toggleDrawer(false)} />
                                </IconButton>
                                <Divider sx={{ mb: 2 }} />
                                <Box sx={{ mb: 2 }}>
                                    <ListItemButton>
                                        <Button
                                            startIcon={<HomeIcon color="error" />}
                                            variant="text"
                                            sx={{ color:"white" }}
                                        >
                                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                                        </Button>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <Button
                                            startIcon={<WhatshotIcon color="error" />}
                                            variant="text"
                                            sx={{ color:"white" }}
                                        >
                                            <Link to="/top-games" style={{ textDecoration: 'none', color: 'white' }}>Top Games</Link>
                                        </Button>
                                    </ListItemButton>
                                </Box>
                                <Divider sx={{ mb: 2 }} />
                                <Rightbar/>
                            </Box>
                        </Drawer>
                    </Icons>
                    <Icons sx={{ display: { xs: "none", sm: "none", md: "block"}}}>
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