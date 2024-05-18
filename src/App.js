import React, { useEffect, useState } from 'react';
import AllPerson from "./components/getAllPerson/AllPerson";
import './App.css'
import axios from "axios";
import CharacterDetail from "./components/getDetailPerson/characterDetail";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personId, setPersonId] = useState([]);
    const [selectedPerson, setSelectedPerson] = React.useState(null);


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

    return (
        <div className='App'>
            <AllPerson
                persons={persons}
                setPersonId={setPersonId}
                setSelectedPerson={setSelectedPerson}
            />
            <CharacterDetail
                persons={selectedPerson}
            />
        </div>
    );
};

export default App;
