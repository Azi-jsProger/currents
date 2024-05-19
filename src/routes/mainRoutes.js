import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Currency from "../pages/currency/currency";

const MainRoutes = () => {
    return (
        <Routes>
            <Route  path={'/'} element={<Navigate to={'/currency'} replace/>}/>
            <Route  path={'/currency'} element={<Currency />}/>
        </Routes>
    );
};

export default MainRoutes;