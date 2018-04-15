import React from "react";
import logo from "../../images/nav/logo.svg";
import { NavLink as Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="blurBar">
        <div className="MenuContainer">
          <Link
            className="MenuItem"
            exact
            activeClassName="activeMenuItem"
            to="/"
          >
            Work
          </Link>
          <Link
            className="MenuItem"
            activeClassName="activeMenuItem"
            to="/about"
          >
            About
          </Link>
        </div>

        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <a className="version" href="https://github.com/jocoio/joco">
          v1.1.3
        </a>
      </div>
    );
  }
}
