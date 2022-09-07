import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonsOperator = event => {
    const target = event.target.name;
    this.setState(prevState => {
    return {
        ...prevState,
        [target]: prevState[target] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100 || 0).toFixed(
      0
    );
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <div className="buttonsSet">
          {Object.keys(this.state).map(item => (
            <button
              type="button"
              name={item}
              key={item}
              onClick={this.buttonsOperator}
            >
              {item}
            </button>
          ))}
        </div>
        <p>Statistics</p>
        <div>
          {Object.keys(this.state).map(item => (
            <p key={item}>
              {item}:<span>{this.state[item]}</span>
            </p>
          ))}
          <p>
            Total:<span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive feedbacks:
            <span>{this.countPositiveFeedbackPercentage()} %</span>
          </p>
        </div>
      </>
    );
  };
};

export default App;