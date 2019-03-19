import React from 'react';


function Button(props) {
  return (
    <button className={props.className}>
      <i className='material-icons'>{props.icon}</i>
    </button>
  );
}

export default Button;