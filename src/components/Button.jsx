import React from 'react';


function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <i className='material-icons'>{props.icon}</i>
    </button>
  );
}

export default Button;