import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css'

export class Section extends Component {
    render() {
        return (
            <section className={s.section}>
                <p>{this.props.title}</p>
                {this.props.children}
            </section>
        );
    };
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};