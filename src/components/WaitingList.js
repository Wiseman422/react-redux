import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>enter</button>
        <button onClick={onLeave}>exit</button>
      </div>
    </li>
  );
};

const WaitingList = ({ input, waitingList, onChange, onSubmit, onEnter, onLeave }) => {
  const waitingItems = waitingList.map( w =>(
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      onEnter={() => onEnter(w.id)}
      onLeave={() => onLeave(w.id)}
    />
  ));

  return (
    <div className="WaitingList">
      <h2>Lists</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {waitingItems}
      </ul>
    </div>
  );
};

export default WaitingList;
