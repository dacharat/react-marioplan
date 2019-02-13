import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SignedinLinks";
import SignoutLinks from "./SignoutLinks";
import {connect} from 'react-redux'

const Nav = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SigninLinks />
        <SignoutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Nav);
