import React, {useEffect, useState} from 'react';
import AllPerson from "./components/getAllPerson/AllPerson";
import './App.css'
import axios from "axios";

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

    console.log(persons)

    return (
        <div className='App'>
            <AllPerson
                persons={persons}
            />

        </div>
    );
};








export default App;