import React from 'react';
import {
    Autocomplete,
    FormControl, InputLabel,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, MenuItem, Select,
    TextField,
    Typography
} from "@mui/material";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Rightbar = () => {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ];

    return(
        <>
            <Typography variant="h6" mb={3}>
                Category
            </Typography>
            <Autocomplete

                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="All" />}
            />
            <Typography variant="h6" mb={3} mt={3}>
                Tags
            </Typography>
            <Autocomplete

                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="All" />}
            />
            <Typography variant="h6" mb={3} mt={3}>
              Platform
            </Typography>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <LaptopChromebookIcon />
                    </ListItemIcon>
                    <ListItemText primary="PC" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ScreenSearchDesktopIcon />
                    </ListItemIcon>
                  <ListItemText primary="Browser" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="All" />
                </ListItemButton>
            </List>
            <Typography variant="h6" mb={3} mt={3}>
                Sort games
            </Typography>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-simple-select-label">By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="age"
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Rightbar;