import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonsOperator = event => {
    const target = event.target.name;
    this.setState(prevState => {
      return { ...prevState, [target]: prevState[target] + 1, };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions state={this.state} onLeaveFeedback={this.buttonsOperator}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state}></Statistics>
        </Section>
      </>
    );
  };
};

export default App;