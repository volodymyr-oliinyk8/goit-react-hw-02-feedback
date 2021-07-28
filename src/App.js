import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  indicateFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  indicateFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  indicateFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    // const { feedback } = this.state;
    return (
      <>
        <Feedback
          onIndicateFeedbackGood={this.indicateFeedbackGood}
          onIndicateFeedbackNeutral={this.indicateFeedbackNeutral}
          onIndicateFeedbackBad={this.indicateFeedbackBad}
        />
        <Statistics feedback={this.state} />
      </>
    );
  }
}

export default App;
