import React from 'react'
import './card.css';

const Card = ({monster}) => {
    const {name, id, email} = monster
 
    return (
        <div className="card-container">
            <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=300x300`}/>
            <h3> {name} </h3>
            <p> {email} </p>
        </div>
      
    )
}

export default Card
