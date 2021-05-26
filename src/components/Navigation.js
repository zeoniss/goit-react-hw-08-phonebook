import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'black',
  },
}));

const Navigation = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeStyle={{
          backgroundColor: 'cyan',
          color: 'purple',
        }}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={classes.link}
          activeStyle={{
            backgroundColor: 'cyan',
            color: 'purple',
          }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
