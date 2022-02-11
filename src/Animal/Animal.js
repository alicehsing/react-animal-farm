import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return <div className="animal" style={{ top:props.top, left:props.left, color:props.color }}>
    <img src={`./animals/${props.type}.svg`} />
    <div className="animal-name">{props.name}</div>
    <div className="animal-says">{props.says}</div>

  </div>;
}