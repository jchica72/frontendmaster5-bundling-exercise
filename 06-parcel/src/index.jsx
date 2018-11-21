import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SummaryComponent } from './summaryComponent';
import './style.scss';

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <SummaryComponent />
  </div>,
  document.getElementById('root')
);