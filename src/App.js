import React, { useState } from 'react';

import sum from './sum';

function App() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(sum(number, 1));
  }

  return (
    <div>
      <button className="increment-button" onclick={handleClick}>
        Increment
      </button>
      <p className="number">{number}</p>
    </div>
  );
}

export default App;
