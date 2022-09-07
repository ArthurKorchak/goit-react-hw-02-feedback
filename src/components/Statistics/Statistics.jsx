import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component { 
    countTotalFeedback = () => {
        return Object.values(this.props.state).reduce((acc, item) => acc + item, 0);
     };

    countPositiveFeedbackPercentage = () => {
        return ((this.props.state.good / this.countTotalFeedback()) * 100 || 0).toFixed(0);
    };

    render() {
        return (
            <div>
                {Object.keys(this.props.state).map(item => (
                    <p key={item}>{item}: <span>{this.props.state[item]}</span></p>
                ))}
                <p>Total: <span>{this.countTotalFeedback()}</span></p>
                <p>Positive feedbacks: <span>{this.countPositiveFeedbackPercentage()}%</span></p>
            </div>
        );
    };
};

Statistics.propTypews = {
    state: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;