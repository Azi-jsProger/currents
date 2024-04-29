import React from 'react';
import './style.css'
import AboutUs from "./components/AboutUs/AboutUS";
import Contacts from "./components/Contacts/contacts";
const Main = () => {
    return (
        <div className='main'>
        MAIN
            <AboutUs />
            <Contacts />
        </div>
    );
};

export default Main;