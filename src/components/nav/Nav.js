import React from 'react';
import logo from '../../images/nav/logo.svg';
import { NavLink as Link } from 'react-router-dom';
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
            <Row style={styles} className="menu">
                <div className="MenuContainer">
                    <Link className="MenuItem" activeClassName="activeMenuItem" to="/work" >Work</Link>
                    <Link className="MenuItem" activeClassName="activeMenuItem" to="/about">About</Link>
                </div>
        
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="blurBar"/>
                <p><a className="version" href="https://github.com/jocoio/joco">v0.8</a></p>
            </Row> 
        );
    }
}