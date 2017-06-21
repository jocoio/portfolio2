import React from 'react';
import menu from './images/menu.png';
import logo from './images/logo.png';
import cross from './images/cross.png';
import { Link } from 'react-router';

import './Nav.css'

class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            isMenuVisible: false
        };
    }

    render() {
        var styles = {
            position: "fixed"
        }

        return (
            <div style={styles}>
                <img src={menu} className="MenuIcon" alt="MenuIcon" onClick={() => this.toggleMenu()} />
                {this.state.isMenuVisible ?
                    <div className="MenuContainer">
                        <img onClick={() => this.toggleMenu()} className="MenuExit" src={cross} alt="MenuExit"/>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/">Home</Link>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/work" >Work</Link>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/about">About</Link>
                    </div>
                    : null}
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
        );
    }

    toggleMenu() {
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }
}

export default Nav;