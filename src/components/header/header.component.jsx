import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expense App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Go Home
    </NavLink>
    <NavLink to="/add" activeClassName="is-active">
      Add Expense Page
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help Page
    </NavLink>
  </header>
);

export default Header;
