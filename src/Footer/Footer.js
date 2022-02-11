import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './Footer.css';

export default class Footer extends Component{
  render() {
    return <footer>For questions, please reach out to {this.props.email}.</footer>;
  }
}

// export default function Footer(props) {
//   return <footer>For questions, please reach out to {props.email}.</footer>;
// }
