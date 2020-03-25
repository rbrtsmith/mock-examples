import React from 'react';
import './App.css';

import { ScrollExample } from './ScrollExample'
import { HeightExample } from './HeightExample'
import { RandomIdExample } from './RandomIdExample'
import { TimerExample } from './TimerExample'
import { SlowComponentExample } from './SlowComponentExample'


function App() {
  return (
    <div>
      <h1>Mocking examples</h1>
      <div className="app-container">
        <ScrollExample />
        <hr />
        <HeightExample />
        <hr />
        <RandomIdExample />
        <hr />
        <TimerExample />
        <hr />
        <SlowComponentExample />
      </div>
    </div>
  );
}

export default App;
