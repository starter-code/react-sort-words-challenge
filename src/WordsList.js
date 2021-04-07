import React from 'react';

const DEFAULT_WORDS = ['zero', 'bob', 'pencil', 'rope', 'mac', 'orange'];

export const WordsList = () => {
  const onClick = () => {
    // implement this
  };

  return (
    <div className="words-list-container">
      <h2>Words List</h2>
      <ul className="words-list">
        {DEFAULT_WORDS.map((word, key) => {
          return <li index={key}>{word}</li>;
        })}
      </ul>
      <button onClick={onClick}>Sort</button>
    </div>
  );
};
