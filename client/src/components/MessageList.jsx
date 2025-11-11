import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages, currentUser, typingUsers }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${
            message.system ? 'system-message' : 
            message.sender === currentUser ? 'own-message' : 'other-message'
          } ${message.isPrivate ? 'private-message' : ''}`}
        >
          {!message.system && (
            <div className="message-header">
              <span className="sender">{message.sender}</span>
              <span className="timestamp">{formatTime(message.timestamp)}</span>
            </div>
          )}
          <div className="message-content">
            {message.message}
            {message.isPrivate && <span className="private-badge">Private</span>}
          </div>
        </div>
      ))}
      
      {typingUsers.length > 0 && (
        <div className="typing-indicator">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;