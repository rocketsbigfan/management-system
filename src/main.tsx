import React from 'react';
import ReactDOM from 'react-dom';
import { AliveScope } from 'react-activation';
import './styles/index.less';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AliveScope>
      <AppRouter />
    </AliveScope>
  </React.StrictMode>,
  document.getElementById('root'),
);
