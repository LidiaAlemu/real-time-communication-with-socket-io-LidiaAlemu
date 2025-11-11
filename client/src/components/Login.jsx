import React, { useState } from 'react';
import { useSocket } from '../socket/socket';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const { connect } = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      connect(username);
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Join the Chat</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-input"
            maxLength={20}
          />
          <button type="submit" className="join-button">
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;