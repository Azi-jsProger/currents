import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {axiosInstance} from "../../utils/API/API";
import './style.css'
import IsLoading from "../../components/loading/isLoading";

const DetailPage = () => {

  const {id} =  useParams()

    console.log(id)

    const [isLoading, setIsLoading] = useState(false)
    const [character, setCharacter] = useState({})
    const [error , setError] = useState(null)

    const getCharacter = async () => {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(`api/v2/Characters/${id}`)
            setCharacter(response.data)
        }catch (e) {
            if (e?.response?.status === 400) {
                setError('вы запросе ошибка!')
            } else if (e?.response?.status === 404) {
                setError('сервер не найден!')
            } else if (e?.response?.status === 500) {
                setError('внутренняя ошибка сервера!')
            } else {
                setError('интернет отключен!')
            }

        } finally {
            setIsLoading(true)
        }

    }

    useEffect(() => {
        getCharacter()
    }, []);

    return (
        <div className='character'>
            {isLoading ?
                <IsLoading />
                :
                <div className='container'>

                    <h2>{character.fullName}</h2>

                    <div className='big-photo'>
                        <img src={character.imageUrl} alt=""/>
                    </div>

                    <div>
                        {character.family}
                    </div>


                    <div className='div-error'>
                        {error && <h2 className='error'>{error}</h2>}
                    </div>

                </div>


            }
        </div>


    );
};

export default DetailPage;