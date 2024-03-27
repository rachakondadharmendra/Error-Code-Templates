// src/App.js

import React from 'react';
import DirectIPNotAllowed from './error_page/DirectIPNotAllowed'; // Import the DirectIPNotAllowed component

function App() {
  return (
    <div className="App">
      <DirectIPNotAllowed /> {/* Use the DirectIPNotAllowed component */}
    </div>
  );
}

export default App;
