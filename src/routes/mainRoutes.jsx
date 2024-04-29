import React from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CatsPage from "../pages/CatsPage/CatsPage";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DogsMain from "../pages/DogsMain/DogsMain";
import axios from "axios";



const MainRoutes = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/cats'} element={<CatsPage />} />
                <Route path={'/dogs'} element={<DogsMain />} />
            </Routes>
            <Footer />
        </div>
    );
};







export default MainRoutes;