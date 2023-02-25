import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/">{props.aboutText}</a>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: 'title here',
    aboutText: 'about text here'
  };
