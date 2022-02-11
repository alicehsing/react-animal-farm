import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './Animal.css';

export default class AnimalList extends Component {

  render() {
    return <div className="animal" style={{ top:this.props.top, left:this.props.left, color:this.props.color }}>
      <img src={`./animals/${this.props.type}.svg`} />
      <div className="animal-name">{this.props.name}</div>
      <div className="animal-says">{this.props.says}</div>

    </div>;
  }
}

// export default function Animal(props) {
//   return <div className="animal" style={{ top:props.top, left:props.left, color:props.color }}>
//     <img src={`./animals/${props.type}.svg`} />
//     <div className="animal-name">{props.name}</div>
//     <div className="animal-says">{props.says}</div>

//   </div>;
// }