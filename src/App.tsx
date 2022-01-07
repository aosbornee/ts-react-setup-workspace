import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { add } from './utils';

const App = () => (
  <div>
    {process.env.url}
    <p>{add(30, 25)}</p>
    <h1>
      We dere man cmon
      {process.env.name} Osborne
    </h1>
    <Counter />
  </div>
);

export default App;
