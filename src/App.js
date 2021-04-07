import React from 'react';
import { Instructions } from './Instructions';
import { WordsList } from './WordsList';

export const App = () => {
  return (
    <div className="App">
      <Instructions />
      <WordsList />
    </div>
  );
};
