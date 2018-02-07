import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    Dashboard
} from './dashboard'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
registerServiceWorker();
