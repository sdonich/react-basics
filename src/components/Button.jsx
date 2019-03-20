import React from 'react';


function Button(props) {
  return (
    <button {...props}>{props.children ? props.children : <i className='material-icons'>{props.icon}</i>}
    </button>
  );
}

export default Button;