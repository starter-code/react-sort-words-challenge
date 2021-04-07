import React from 'react';

export const Instructions = () => {
  return (
    <div className="instructions">
      <h4>Modify this code with the follow criteria:</h4>
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
          Bonus: add an input form for user to add his/her own words to list.
          Retain same functionality listed above where original form would have
          extra words appended
        </li>
      </ul>
    </div>
  );
};
