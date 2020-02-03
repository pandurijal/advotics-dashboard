import React from 'react';
import { Navbar, Calendar } from './Components';
import './App.css';
import 'rc-calendar/assets/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calendar />
    </div>
  );
}

export default App;
