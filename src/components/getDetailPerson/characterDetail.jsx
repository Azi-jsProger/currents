import React from 'react';
import './style.css'

const CharacterDetail = (props) => {

    const {
        persons,
    } =props

    return (
        <div className='detail'>
            <h1 className='detail-h1'>Character Detail</h1>
            <div className="detail-info">

                { persons && (
                    <div className='informationPerson'>
                        <h1 className='info-h1'>{persons.firstName} {persons.lastName}</h1>
                        <img className='' src={persons.imageUrl} alt={persons.firstName}/>
                    </div>

                )}
            </div>
        </div>
    );
};

export default CharacterDetail;