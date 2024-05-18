import React from 'react';
import './style.css';

const AllPerson = (props) => {

    const {
        persons,
        setPersonId,
        setSelectedPerson
    } = props;


    const getById = (person) => {
        setPersonId(prevIds => [...prevIds, person.id]);
        setSelectedPerson(person);
    }

    const firstTenPersons = persons.slice(0, 10);

    return (
        <div className='persons-deteil'>
            <h1 className='Character'>Character List</h1>
            <div className="persons">
                <div className="persons-data">
                    <div className='task'>
                        <h1>id</h1>
                        <h1>name</h1>
                        <h1>image</h1>
                    </div>
                    {firstTenPersons.map((item, idx) => (
                        <div key={idx} className='person-info' onClick={() => getById(item)}>
                            <h1>{item.id}</h1>
                            <h1>{item.firstName} {item.lastName}</h1>
                            <img className='person-img' src={item.imageUrl} alt={item.firstName} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPerson;
