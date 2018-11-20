import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SummaryComponent } from './summaryComponent';
import { EnvStatus } from './envStatus';
import './style.scss';

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <SummaryComponent />
    <h2>Status: </h2>
    <EnvStatus/>
  </div>,
  document.getElementById('root')
);