import React, {useEffect, useState} from 'react';
import {axiosInstance} from "../../utils/API/API";
import './style.css'
import {useNavigate} from "react-router-dom";

const MainPage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate()

    const getCharacter = async () => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get('api/v2/Characters')
            setCharacters(response.data)
        }catch (e) {
            if (e.response.status === 400) {
                console.log('Aziret write error')
            } else if (e.response.status === 404) {
                console.log('lirvbnfm')
            } else if (e.response.status === 500) {
                console.log('fuygsruhvruoi')
            }
            else {
                console.log('Not information')
            }
        } finally {
            setIsLoading(false)
        }

    }

    console.log(characters)

    useEffect(() => {
        getCharacter()
    }, []);

    return (
        <div>
            {isLoading ?
                <h1 className='loading'>Loading</h1>
                :
                <div className='character-list-wrap'>
                    {characters.map((item,idx,arrey) => {
                            return (
                                <div
                                    key={idx}
                                    className='character-list'
                                    onClick={() => navigate(`/${item.id}`)}
                                >

                                    <div>
                                        {item.id}
                                    </div>

                                    <div>
                                        {item.fullName}
                                    </div>

                                    <div className='photo'>
                                        <img className='photoImg' src={item.imageUrl} alt=""/>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            }
        </div>
    );
};

export default MainPage;