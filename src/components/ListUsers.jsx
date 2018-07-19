import React from 'react';
import { connect } from 'react-redux';

class ListOfUsers extends React.Component {
  liItem = React.createRef();

  routeHandler = e => {
    e.preventDefault();
    const user = this.liItem;
    console.log(e.currentTarget);
  };

  render() {
    const { users } = this.props;
    return (
      <ul
        style={{
          display: 'grid',
          width: '1200px',
          gridTemplateColumns: 'repeat(5, 1fr)',
          margin: 'auto',
          gap: '2em',
          listStyleType: 'none',
        }}
      >
        {users.map(user => (
          <li
            ref={this.liItem}
            onClick={this.routeHandler}
            key={user.id}
            style={{
              background: 'cornsilk',
            }}
          >
            <div>
              <span>{user.login}</span>
              <img src={user.avatar_url} width="100" alt="avatar" />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  null,
)(ListOfUsers);
