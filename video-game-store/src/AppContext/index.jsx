import React, {useEffect, useState} from 'react';
import {createTheme} from "@mui/material";

const AppContext = React.createContext(undefined, undefined);

function AppProvider(props) {

    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6dcd3fc51emshc55b4a65797ef7bp119f66jsn5ab19612c056',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const [loading, setLoading] = useState(false);
    const [gameList, setGameList] = useState([]);
    const [gameDetails, setGameDetails] = useState({});
    const [filterGames, setFilterGames] = useState([]);
    const [newTag, setNewTag] = useState('');
    const [platform, setPlatform] = useState('');
    const [sort, setSort] = useState('');
    const [gameId, setGameId] = useState('');


    const fetchAllGames = () => {
        setLoading(true);
        fetch(url, options)
            .then(response => response.json())
            .then(
                response => {
                    setGameList(response);
                    setFilterGames(response);
                    setLoading(false);
                }
            )
            .catch(
                err => console.error(err)
            );
    };

    useEffect(() => {
        fetchAllGames();
    }, []);

    function fetchGame(id) {
        setGameDetails({});
        setLoading(true);
        const urlGameId = "https://free-to-play-games-database.p.rapidapi.com/api/game?id="+id;
        fetch(urlGameId, options)
            .then(response => response.json()
            )
            .then(
                response => {
                    setGameDetails(response);
                    setLoading(false);
                }
            )
            .catch(
                err => console.error(err)
            );
    }

    const fetchTopGames = () => {
        fetch(url+"?sort-by=popularity", options)
            .then(response => response.json())
            .then(
                response => {
                    setFilterGames(response);
                }
            )
            .catch(
                err => console.error(err)
            );
    }

    const fetchGamesByTag = (filter) => {
        console.log(url+filter);
        fetch(url+filter, options)
            .then(response => response.json())
            .then(
                response => {
                    setFilterGames(response);
                    console.log(response);
                }
            )
            .catch(
                err => console.error(err)
            );
    }

    const fetchNameGame = () => {
        console.log('gameId', gameId);

        if(gameId) {
            let game = gameList.find(({title}) => title === gameId);
            setFilterGames([game]);
        }
    }


    const tagList = [
        'mmorpg',
        'shooter',
        'strategy',
        'moba',
        'racing',
        'sports',
        'social',
        'sandbox',
        'open-world',
        'survival',
        'pvp',
        'pve',
        'pixel',
        'voxel',
        'zombie',
        'turn-based',
        'first-person',
        'third-Person',
        'top-down',
        'tank',
        'space',
        'sailing',
        'side-scroller',
        'superhero',
        'permadeath',
        'card',
        'battle-royale',
        'mmo',
        'mmofps',
        'mmotps',
        '3d',
        '2d',
        'anime',
        'fantasy',
        'sci-fi',
        'fighting',
        'action-rpg',
        'action',
        'military',
        'martial-arts',
        'flight',
        'low-spec',
        'tower-defense',
        'horror',
        'mmorts'
    ];

    let titleList = gameList.map(function(item) { return item["title"]; });

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <AppContext.Provider value={{
            fetchGame,
            fetchTopGames,
            fetchGamesByTag,
            gameDetails,
            gameList,
            tagList,
            titleList,
            filterGames,
            newTag,
            setNewTag,
            platform,
            setPlatform,
            sort,
            setSort,
            darkTheme,
            setGameId,
            gameId,
            fetchNameGame,
            loading
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }