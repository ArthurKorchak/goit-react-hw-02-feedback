import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    render() {
        return (
            <section>
                <p>{this.props.title}</p>
                {this.props.children}
            </section>
        );
    };
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
};

export default Section;