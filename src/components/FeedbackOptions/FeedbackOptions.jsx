import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component { 
    render() {
        return (
            <div className="buttonsSet">
                {Object.keys(this.props.state).map(item => (
                    <button type="button" name={item} key={item} onClick={this.props.onLeaveFeedback}>{item}</button>
                ))}
            </div>
        );
    };
};

FeedbackOptions.propTypes = {
    state: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;