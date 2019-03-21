import React from 'react';
import Stats from './Stats';

function Header(props) {
  return (
    <header>
      <Stats className='stats' todos={props.todos} />
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;