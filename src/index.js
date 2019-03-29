import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
  // const access = false;
  axios.get('api/access')
    .then(res => {
      ReactDOM.render(<App title='React to-do' access={true} />, document.getElementById('root'));
    })
    // .
    .catch((error) => {
      if (error.response.status === 401) {
      ReactDOM.render(<App title='React to-do' access={false} />, document.getElementById('root'));
      }

    })



