import React from 'react';
import ReactDOM from 'react-dom';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh'

import App from './components/App';

ReactDOM.render(
  <App
  apiUrl={API_URL}
   />,
  document.getElementById('root')
);
