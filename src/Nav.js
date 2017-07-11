import React from 'react';
import menu from './images/nav/menu.svg';
import logo from './images/nav/logo.svg';
import cross from './images/nav/cross.png';
import { Link } from 'react-router-dom';
import { Row, Col } from './grid';
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
            zIndex : "1",
            height: "100px"
        }

        return (
            <Row style={styles}>
                
                <img src={menu} className="MenuIcon" alt="MenuIcon" onClick={() => this.toggleMenu()} />

                {this.state.isMenuVisible ?
                    <Col className="MenuContainer"
                        lgWidth={5} mdWidth={5} smWidth={5} xsWidth={12}>
                        <img onClick={() => this.toggleMenu()} className="MenuExit" src={cross} alt="MenuExit"/>
                        <Link className="MenuItem" onClick={() => this.toggleMenu()} to="/">Featured</Link>
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