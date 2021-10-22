import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter/>
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
