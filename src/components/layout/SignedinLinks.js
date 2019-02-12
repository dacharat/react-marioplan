import React from "react";
import { Link } from "react-router-dom";

const SigninLinks = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/create">New Project</Link>
      </li>
      <li>
        <Link to="/">Log out</Link>
      </li>
      <li>
        <Link to="/" className='btn btn-floating pink lighten-1'>Jack</Link>
      </li>
    </ul>
  );
};

export default SigninLinks;
