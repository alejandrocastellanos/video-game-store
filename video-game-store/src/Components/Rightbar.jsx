import React, {useContext, useEffect} from 'react';
import {
    Autocomplete,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AbcIcon from '@mui/icons-material/Abc';
import GradeIcon from '@mui/icons-material/Grade';

import {AppContext} from "../AppContext";

const Rightbar = () => {

    const {
        tagList,
        titleList,
        fetchGamesByTag,
        newTag,
        setNewTag,
        platform,
        setPlatform,
        sort,
        setSort,
        setGameId,
        gameId,
        fetchNameGame
    } = useContext(AppContext);

    useEffect(() => {
        if(gameId){
            searchGameByName();
        }else if(newTag || platform || sort){
            filters();
        }

    }, [newTag, platform, sort, gameId]);

    let filters = () => {
        let filterTag = newTag ? "category="+newTag+"&" :  "";
        let filterPlatform = platform ? "platform="+platform+"&" : "";
        let filterSort = sort ? "sort-by="+sort+"&" : "";
        let filter = "?" + filterTag + filterPlatform + filterSort
        fetchGamesByTag(filter.slice(0, -1));
    }

    let searchGameByName = () => {
        fetchNameGame();
    }

    return(
        <>
            <Typography variant="h6" mb={3}>
                Category
            </Typography>
            <Autocomplete
                disablePortal
                id="caetgory-box"
                options={titleList}
                value={gameId}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search" />}
                onChange={(e, value) => {
                    setGameId(value);
                }}
            />
            <Typography variant="h6" mb={3} mt={3}>
                Tags
            </Typography>
            <Autocomplete
                disablePortal
                id="tag-box"
                options={tagList}
                sx={{ width: 300 }}
                onChange={(e, value) => {
                    setNewTag(value);
                }}
                renderInput={(params) => <TextField {...params} label="All" />}
            />
            <Typography variant="h6" mb={3} mt={3}>
              Platform
            </Typography>
            <Autocomplete
                disablePortal
                id="tag-box"
                options={["pc", "browser", "all" ]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="All" />}
                onChange={(e, value) => {
                    setPlatform(value);
                }}
            />
            <Typography variant="h6" mb={3} mt={3}>
                Sort by
            </Typography>
            <List>
                <ListItemButton
                    onClick={() => {
                        setSort('release-date');
                    }}
                >
                    <ListItemIcon>
                        <FiberNewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Release date" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => {
                    setSort('popularity');
                    }}
                >
                    <ListItemIcon>
                        <AirlineStopsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Popularity" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => {
                        setSort('alphabetical');
                    }}
                >
                    <ListItemIcon>
                        <AbcIcon />
                    </ListItemIcon>
                    <ListItemText primary="Alphabetical" />
                </ListItemButton>
                <ListItemButton
                    onClick={() => {
                        setSort('relevance');
                    }}
                >
                    <ListItemIcon>
                        <GradeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relevance" />
                </ListItemButton>
            </List>
        </>
    )
}

export default Rightbar;