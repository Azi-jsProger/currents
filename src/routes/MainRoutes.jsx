import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "../Pages/mainPage/mainPage";
import DetailPage from "../Pages/detailPage/detailPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/:id'} element={<DetailPage />} />
        </Routes>
    );
};

export default MainRoutes;