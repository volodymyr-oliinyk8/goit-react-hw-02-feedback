import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  indicateFeedback = event => {
    const key = event.target.outerText.toLowerCase();
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed()
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.indicateFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification messege="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
