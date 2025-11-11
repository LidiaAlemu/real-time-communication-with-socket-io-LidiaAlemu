import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      <h3>Online Users ({users.length})</h3>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <span className="user-status"></span>
            <span className="username">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;