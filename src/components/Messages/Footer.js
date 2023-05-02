import React from 'react';

const RETURN_KEY_CODE = 13;

export default function Footer({ sendMessage, onChangeMessage, message }) {
  const [newMessage, setNewMessage] = React.useState("");
  

  
  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== RETURN_KEY_CODE) { return; }

    //sendMessage();
  }

  const handleonChangeMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="messages__footer">
      <input
        onKeyDown={onKeyDown}
        placeholder="Write a message..."
        id="user-message-input"
        onChange={handleonChangeMessage}
      />
      <div className="messages__footer__actions">
        {/*<i className="far fa-smile" />
        <i className="fas fa-paperclip" />
  <i className="mdi mdi-ticket-outline" />*/}
        <button onClick={handleSendMessage} disabled={!newMessage}>Send</button>
      </div>
    </div>
  );
}