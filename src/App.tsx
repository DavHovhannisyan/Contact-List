import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

const App: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/favorites"} element={<Favorite/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
