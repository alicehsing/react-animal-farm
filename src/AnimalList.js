import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Animal from './Animal/Animal.js';

export default class AnimalList extends Component {

  render() {
    const { animals } = this.props;
    return <div> {animals.map((animal, i) =>
      <Animal key={animal.name + i} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} color={animal.color} />
    )}
    </div>;
  }
}

// export default function AnimalList(props) {
//   return <div>
//     {props.animals.map((animal, i) =>
//       <Animal key={animal.name + i} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} color={animal.color} />
//     )}
//   </div>;
// }
