import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render () {
    return (
      <div className="ui menu">
        <NavLink
          className="item"
          to="/"
          exact
        >
          Home
        </NavLink>
       
        <NavLink
          className="item"
          to="/companies/new"
          exact
        >
          New Company
        </NavLink>
      </div>
    )
  }
  
};

export default NavBar;