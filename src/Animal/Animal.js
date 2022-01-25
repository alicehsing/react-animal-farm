import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return <div className="animal">
    {props.name},
    {props.says},
    <img src={`./animals/${props.type}.svg`} />
  </div>;
}
