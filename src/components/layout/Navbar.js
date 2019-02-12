import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SignedinLinks";
import SignoutLinks from "./SignoutLinks";

const Nav = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignoutLinks />
        <SigninLinks />
      </div>
    </nav>
  );
};

export default Nav;