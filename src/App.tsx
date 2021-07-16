import React, { useState } from 'react';
import { get } from '@/utils/request';
import List from '@/pages/First/TodoLists';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count] = useState(0);

  const handleClick = () => {
    get('/test1/api1', {
      name: 1,
      age: 23,
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>测试测试</p>
        <List />
      </header>
    </div>
  );
}

export default App;
