import React, {useEffect, useState} from 'react';
import axios from "axios";

const CatsPage = () => {
    const [image, setImage] = useState('')

    async function getCats() {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1')
        setImage(response.data[0].url)
    }

    useEffect(() => {
        getCats()
    }, []);
    return (
        <div>
            <h1>CatsPage</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default CatsPage;