import React from 'react';
import ReactDOM from 'react-dom/client';
import {Base} from "./Components/Base";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TopGames from "./Pages/TopGames";
import Game from "./Pages/Game";
import {AppProvider} from "./AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>} />
                <Route path="/top-games" element={<TopGames/>} />
                <Route path="/game/:id" element={<Game/>} />
            </Routes>
        </BrowserRouter>
    </AppProvider>
);
