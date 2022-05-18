import React from 'react';
import './App.css';

import Searchbar from './components/Searchbar.js';
import Pictures from './components/Pictures.js';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Pictures />
    </div>
  );
}

export default App;
