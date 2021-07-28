import React from 'react';

const Feedback = ({
  onIndicateFeedbackGood,
  onIndicateFeedbackNeutral,
  onIndicateFeedbackBad,
}) => (
  <div>
    <p>Please leave feedback</p>
    <div>
      <button onClick={onIndicateFeedbackGood}>Good</button>
      <button onClick={onIndicateFeedbackNeutral}>Neutral</button>
      <button onClick={onIndicateFeedbackBad}>Bad</button>
    </div>
  </div>
);

export default Feedback;
