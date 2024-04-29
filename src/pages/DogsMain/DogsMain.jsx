import React, {useEffect, useState} from 'react';
import axios from "axios";

const DogsMain = () => {

    const [image, setImage] = useState('')

    async function getDogs() {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        setImage(response.data.message)
    }

    useEffect(() => {
        getDogs()
    }, []);

    return (
        <div>
        <h1>Dogspage</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default DogsMain;