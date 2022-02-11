import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './Header.css';

export default class Header extends Component {
  // constructor() {
  //   super();

  //   this.state = {

  //   };
  // }

  render() {
    const { greeting } = this.props;

    return <header>Hi, {greeting}! Welcome to Alchemy Animal Farm!</header>;
  }
}

// export default function Header(props) {
//   return <header>Hi, {props.greeting}! Welcome to Alchemy Animal Farm!</header>;
// }