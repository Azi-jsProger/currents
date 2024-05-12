import React, {useEffect, useState} from 'react';
import AllPerson from "./components/getAllPerson/AllPerson";
import './App.css'
import axios from "axios";
import CharacterDetail from "./components/getDetailPerson/characterDetail";

const App = () => {

    const [persons, setPersons] = useState([]);
    const getPersons = async () => {
            try {
                const response = await axios.get('https://thronesapi.com/api/v2/Characters');
                setPersons(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

    useEffect(() => {
        getPersons()
    }, []);

    const [personId, setPersonId] = useState([])



    return (
        <div className='App'>
            <AllPerson
                persons={persons}
            />
            <CharacterDetail
                setPersonId={setPersonId}
            />
        </div>
    );
};

export default App;