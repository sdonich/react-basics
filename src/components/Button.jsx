import React from 'react';


function Button(props) {
  return (
    <button {...props}>
      <i className='material-icons'>{props.icon}</i>
    </button>
  );
}

export default Button;