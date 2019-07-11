import React from 'react';

const Counter = ({ count, clickCount, onDecrement, onIncrement, onReset, onInputNumberChange, numberInputted, onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <button onClick={onReset}>Reset</button>
          <br />
          <p>Times the increment/decrement buttons have been clicked: {clickCount}</p>
          <br />
          <input type='text' onChange={event => onInputNumberChange(event.target.value)} value={numberInputted} />
          <button onClick={onInputNumber}>Change Count</button>
        </div>
      </div>
    );
}


export default Counter;