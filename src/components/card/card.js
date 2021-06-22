import React, { useEffect, useState, useRef} from 'react';
import  './card.css';



function Card ({ pokemon }) {

  return (
      <>
     
    <div className="card">
        <div>
        <img src={pokemon.sprites.front_default} alt='#' className="card-img"/>
        </div>
        <div>
        <p className="card-name">{pokemon.name}</p>
        </div>
        <div>
        <div>{pokemon.abilities[0].ability.name}</div>
        </div>
        <div>
            {pokemon.types[0].type.name}
        </div>
    </div>
  
  </>
  );
}

export default Card;
