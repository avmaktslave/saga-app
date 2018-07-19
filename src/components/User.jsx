import React from 'react';
import { connect } from 'react-redux';

const User = ({ users }) => (
  <div>
    <div>
      <img src={users.avatar_url} alt="avatar" />
    </div>
    <div>
      <h2>Login: {users.login}</h2>
      <span>Type: {users.type}</span>
    </div>
  </div>
);

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  null,
)(User);
