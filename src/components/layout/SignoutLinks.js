import React from "react";
import { Link } from "react-router-dom";

const SignoutLinks = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin">Log in</Link>
      </li>
    </ul>
  );
};

export default SignoutLinks;
