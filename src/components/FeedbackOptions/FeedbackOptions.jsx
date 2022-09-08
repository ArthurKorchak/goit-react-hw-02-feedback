import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component { 
    render() {
        return (
            <div className={s.buttonsSet}>
                {Object.keys(this.props.state).map(item => (
                    <button type={s.button} name={item} key={item} onClick={this.props.onLeaveFeedback}>{item}</button>
                ))}
            </div>
        );
    };
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    state: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
};