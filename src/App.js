import React from 'react';
import './App.css';
import SignIn from './SignIn.js';
import Reports from './Reports.js';

function App() {
  return (
    <div className="App">
      <SignIn>
        {(getToken) => (
          <Reports getToken={getToken}/>
        )}
      </SignIn>

    </div>
  );
}

export default App;
