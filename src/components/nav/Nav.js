import React from 'react';
import logo from '../../images/nav/logo.svg';
import { Link } from 'react-router-dom';
import { Row } from '../grid';
import './Nav.css';

export default class Nav extends React.Component {

    render() {
        var styles = {
            position: "fixed",
            zIndex : "1",
            height: "75px",
            width: "100vw"
        }

        return (
            <Row style={styles}>
                <div className="MenuContainer">
                    <Link className="MenuItem" to="/work" >Work</Link>
                    <Link className="MenuItem" to="/about">About</Link>
                </div>
        
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="blurBar"/>
                <p><a className="version" href="https://github.com/jocoio/joco">v0.7.1</a></p>
            </Row> 
        );
    }
}