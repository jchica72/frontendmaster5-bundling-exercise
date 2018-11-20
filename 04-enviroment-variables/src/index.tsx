import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AverageComponent } from './averageComponent';
import { EnvStatus } from './envStatus';

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <AverageComponent />
    <h2>Status: </h2>
    <EnvStatus/>
  </div>,
  document.getElementById('root')
);