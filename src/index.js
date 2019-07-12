import React from 'react';
import ReactDOM from 'react-dom';
import TriggerAlert from './components/TriggerAlert';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TriggerAlert />, document.getElementById('root'));
serviceWorker.unregister();
