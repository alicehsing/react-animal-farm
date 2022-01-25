import React from 'react';
import backgroundImage from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList.js';

export default function Main(props) {
  return (
    <div className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
      <AnimalList animals={props.animals} />


    </div>
  );
}
