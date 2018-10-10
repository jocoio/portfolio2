import React from "react";
import logo from "../../images/nav/logo.svg";
import { NavLink } from "react-router-dom";
import "./Nav.css";

// React Redux
import { connect } from 'react-redux';
import { curtainColor } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

class Nav extends React.Component {

  render() {
    return (
      <div className="blurBar">
        <NavLink to={process.env.PUBLIC_URL + `/`} onClick={() => this.props.curtainColor("#32B67A")}>
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <div className="MenuContainer">
          <NavLink
            className="MenuItem"
            exact
            to={process.env.PUBLIC_URL + `/`}
            onClick={() => this.props.curtainColor("#32B67A")}
          >
            Work
          </NavLink>
          <NavLink
            className="MenuItem"
            to={process.env.PUBLIC_URL + `/about`}
            onClick={() => this.props.curtainColor("#32B67A")}
          >
            About
          </NavLink>
        </div>


      </div>
    );
  }
}

Nav.propTypes = {
  curtainColor: PropTypes.func.isRequired
};

export default connect(null, { curtainColor })(Nav);

