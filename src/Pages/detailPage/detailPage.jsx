import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {axiosInstance} from "../../utils/API/API";
import './style.css'
import IsLoading from "../../components/loading/isLoading";

const DetailPage = () => {
    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [character, setCharacter] = useState({});
    const [error , setError] = useState(null);

    const getCharacter = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(`api/v2/Characters/${id}`);
            setCharacter(response.data);
        } catch (e) {
            if (e?.response?.status === 400) {
                setError('вы запросе ошибка!');
            } else if (e?.response?.status === 404) {
                setError('сервер не найден!');
            } else if (e?.response?.status === 500) {
                setError('внутренняя ошибка сервера!');
            } else {
                setError('интернет отключен!');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <div className='container'>
            {isLoading ?
                <div className='loading'>
                    <IsLoading />
                </div>
                :
                <div className='info-character'>

                    <h1>Character Detail</h1>

                    <div className='detail-info'>

                        <div className='name-img'>
                            <h2>{character.fullName}</h2>

                            <div className='big-photo'>
                                <img className='photo' src={character.imageUrl} alt=""/>
                            </div>
                        </div>

                        <div className='details'>

                            <div className="left">
                                <h2>ID:</h2>
                                <h2>First Name:</h2>
                                <h2>Last Name:</h2>
                                <h2>Full Name:</h2>
                                <h2>Title:</h2>
                                <h2>Family:</h2>
                                <h2>Image:</h2>
                                <h2>Image URL:</h2>
                            </div>

                            <div className="right">
                                <h2>{character.id}</h2>
                                <h2> {character.firstName}</h2>
                                <h2> {character.lastName}</h2>
                                <h2> {character.fullName}</h2>
                                <h2> {character.title}</h2>
                                <h2> {character.family}</h2>
                                <h2> {character.image}</h2>
                                <h2> {character.imageUrl}</h2>
                            </div>

                        </div>


                        <div className='div-error'>
                            {error && <h2 className='error'>{error}</h2>}
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default DetailPage;
