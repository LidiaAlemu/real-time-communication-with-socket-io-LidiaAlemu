import React, { useState, useRef, useEffect } from 'react';
import { useSocket } from '../socket/socket';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UsersList from './UsersList';

const ChatRoom = ({ username, onLogout }) => {
  const { 
    messages, 
    users, 
    typingUsers, 
    sendMessage, 
    setTyping,
    disconnect 
  } = useSocket();

  const handleSendMessage = (message) => {
    if (message.trim()) {
      sendMessage(message);
    }
  };

  const handleLogout = () => {
    disconnect();
    onLogout();
  };

  return (
    <div className="chat-room">
      <div className="chat-header">
        <h2>Global Chat Room</h2>
        <div className="user-info">
          <span>Welcome, {username}!</span>
          <button onClick={handleLogout} className="logout-button">
            Leave Chat
          </button>
        </div>
      </div>
      
      <div className="chat-container">
        <div className="users-sidebar">
          <UsersList users={users} />
        </div>
        
        <div className="chat-main">
          <MessageList 
            messages={messages} 
            currentUser={username}
            typingUsers={typingUsers}
          />
          <MessageInput 
            onSendMessage={handleSendMessage}
            onTyping={setTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;