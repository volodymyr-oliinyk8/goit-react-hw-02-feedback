import React from 'react';

const Statistics = ({ feedback }) => (
  <div>
    <p>Statistics</p>
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
    </ul>
  </div>
);

export default Statistics;
