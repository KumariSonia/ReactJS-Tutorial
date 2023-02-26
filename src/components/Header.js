import React from 'react'
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Header(props) {
    return (
        <>
            <nav className="nav bg-dark">
                <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
                <Link className="nav-link" to="/Home">{props.home}</Link>
                <Link className="nav-link" to="/About">{props.aboutText}</Link>
                {props.searchBar ? <Form className="d-flex pull-left">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> : ""}
            </nav>
            <Outlet />
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    searchBar: PropTypes.bool.isRequired
};

Header.defaultProps = {
    title: 'Title',
    aboutText: 'About',
    home: 'Home',
    searchBar: true
};
