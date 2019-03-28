import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
  const access = true;
  // const user = {username: 'tom'};
  axios.post('api/access', {username: 'john'})
    .then(res => {
      if (access) {
        ReactDOM.render(<App title='React to-do' />, document.getElementById('root'));
      } else {
        console.log('none');
      }
    })



