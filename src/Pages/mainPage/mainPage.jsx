import React, { useEffect, useState } from 'react';
import { axiosInstance } from "../../utils/API/API";
import './main.css';
import { useNavigate } from "react-router-dom";
import IsLoading from "../../components/loading/isLoading";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    const getCharacter = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get('api/v2/Characters');
            setCharacters(response.data);
        } catch (e) {
            if (e.response.status === 400) {
                console.log('Aziret write error');
            } else if (e.response.status === 404) {
                console.log('lirvbnfm');
            } else if (e.response.status === 500) {
                console.log('fuygsruhvruoi');
            } else {
                console.log('Not information');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <div className='container-info'>
            {isLoading ?
                <div className='loading'>
                    <IsLoading/>
                </div>
                :

                <div className='character'>

                    <h1 className='list'>Character List</h1>

                    <div className='character-list-wrap'>

                        <div className="hard-info">
                            <h1>Id</h1>
                            <h1>Name</h1>
                            <h1>Image</h1>
                        </div>

                        {characters.map((item, idx) => (
                            <div
                                key={idx}
                                className='character-list'
                                onClick={() => navigate(`/${item.id}`)}
                            >
                                <div>{item.id}</div>
                                <div>{item.fullName}</div>

                                <div className='photo'>
                                    <img src={item.imageUrl} alt={item.fullName}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            }
        </div>
    );
};

export default MainPage;
