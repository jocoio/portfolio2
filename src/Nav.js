import React from 'react';
import menu from './images/menu.png';
import logo from './images/logo.png';
import cross from './images/cross.png';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

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
            position: "fixed",
            zIndex : "2"
        }

        return (
            <Row style={styles}>
                
                <img src={menu} className="MenuIcon" alt="MenuIcon" onClick={() => this.toggleMenu()} />

                {this.state.isMenuVisible ?
                    <Col xs={12} sm={4} md={4} lg={3}  className="MenuContainer">
                        <img onClick={() => this.toggleMenu()} className="MenuExit" src={cross} alt="MenuExit"/>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/">Home</Link>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/work" >Work</Link>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/about">About</Link>
                    </Col>
                    : null}
        
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </Row>
        );
    }

    toggleMenu() {
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }
}

export default Nav;