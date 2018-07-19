import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import ListOfUsers from './ListUsers';

class App extends Component {
  amount = React.createRef();

  static propTypes = {
    getUsers: func.isRequired,
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { getUsers } = this.props;
    const amount = this.amount.current.value;
    getUsers(amount);
  };

  render() {
    return (
      <div>
        <h1>Hello Saga</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" ref={this.amount} />
          <button type="submit">Get users</button>
        </form>
        <ListOfUsers />
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = {
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
