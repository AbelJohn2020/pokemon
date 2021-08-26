import React from 'react';
import { getCharacters } from './components/utils';

function App() {
  getCharacters()
    .then(res => console.log(res))
    .catch(error => console.log(error));
  return (
    <div className="App">
    </div>
  );
}

export default App;
