import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SignedinLinks";
import SignoutLinks from "./SignoutLinks";
import { connect } from "react-redux";

const Nav = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SigninLinks profile={profile} /> : <SignoutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

export default connect(mapStateToProps)(Nav);
