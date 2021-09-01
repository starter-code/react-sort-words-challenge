import React from 'react';

export const Instructions = () => {
  return (
    <div className="instructions">
      <h4>Modify this code with the following criteria:</h4>
      <ul>
        <li>
          If list is not sorted, "Sort" button should sort words alphabetically
          from A-Z. "Sort" should then say "Unsort"
        </li>
        <li>
          If list is sorted, "Unsort" button should revert words to original.
          "Unsort" button should revert to saying "Sort" order
        </li>
        <li>
          Bonus: Add an input form for user to add his/her own words to list. A
          new word is appended to the unsorted list. When "Unsort" is clicked,
          the list reverts back to its original order.
        </li>
      </ul>
    </div>
  );
};
