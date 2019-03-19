import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import todos from './data/todos';

ReactDOM.render(<App todos={todos} title='React to-do' />, document.getElementById('root'));