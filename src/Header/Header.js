import React from 'react';
import './Header.css';

export default function Header(props) {
  return <header>Hi, {props.greeting}! Welcome to Alchemy Animal Farm!</header>;
}