import React from 'react';
import backgroundImage from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList.js';
import { Component } from 'react/cjs/react.production.min';

export default class Main extends Component {

  render() {
    const { animals } = this.props;
    return (
      <main className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
  
        <AnimalList animals={animals} />
      </main>
    );
  }
}

// export default function Main(props) {
//   return (
//     <main className="main" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
//       <AnimalList animals={props.animals} />


//     </main>
//   );
// }
