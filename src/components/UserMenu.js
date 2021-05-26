import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 12,
  },
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'cyan',

    border: 'transparent',
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={s.container}>
    <img src={avatar} alt="" width="32" style={s.avatar} />
    <span style={s.name}>Welcome, {name}</span>
    <button style={s.button} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  // avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
