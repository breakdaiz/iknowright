import React from 'react';
import './cardlist.css';
import Card from '../card/card';


const Cardlist = (monsters) => (

  <div className="card-list">
    {
          monsters.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))
    }
  </div>

);

export default Cardlist;
