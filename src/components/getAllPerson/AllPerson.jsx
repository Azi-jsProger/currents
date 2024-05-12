import React from 'react';
import './style.css'

const AllPerson = (props) => {

    const {
        persons
    } = props

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


                    {firstTenPersons.map((item, idx, arrey) => {
                        return (

                            <div>


                                <div
                                    key={idx}
                                    className='person-info'
                                >
                                    <h1>{item.id}</h1>
                                    <h1>{item.firstName} {item.lastName}</h1>
                                    <img className='person-img' src={item.imageUrl} alt=""/>
                                </div>
                            </div>


                        )
                    })

                    }
                </div>
            </div>


        </div>
    );
};

export default AllPerson;
