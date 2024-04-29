import React from 'react';
import  './style.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to={'/'}>
                <button>На главную</button>
            </Link>
            <Link to={'/cats'}>
                <button>К котам</button>
            </Link>
            <Link to={'/dogs'}>
                <button>К собакам</button>
            </Link>


        </div>
    );
};

export default Header;



