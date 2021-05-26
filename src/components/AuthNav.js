import React from 'react';
import { NavLink } from 'react-router-dom';

const s = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 400,
    color: 'black',
  },
  activeLink: {
    backgroundColor: 'cyan',
    color: 'purple',
  },
};

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact style={s.link} activeStyle={s.activeLink}>
      Register
    </NavLink>
    <NavLink to="/login" exact style={s.link} activeStyle={s.activeLink}>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
