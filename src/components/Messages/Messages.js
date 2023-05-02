import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import useSound from 'use-sound';
import config from '../../config';
import LatestMessagesContext from '../../contexts/LatestMessages';
import TypingMessage from './TypingMessage';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import './_messages.scss';

const socket = io(
  config.BOT_SERVER_ENDPOINT,
  { transports: ['websocket', 'polling', 'flashsocket'] }
);

function Messages() {
  const [playSend] = useSound(config.SEND_AUDIO_URL);
  const [playReceive] = useSound(config.RECEIVE_AUDIO_URL);
  const { setLatestMessage } = useContext(LatestMessagesContext);
  const [messages, setMessages] = useState([]);
  const [isTyping, setTyping] = useState(false);

  const addMessages = (msg) => {
    setMessages((prev) => [...prev, { user: 'me', message: msg }]);
  };

  const sendMessage = (msg = "Bye") => {
    socket.emit('send_message', msg);
    addMessages(msg);
    setLatestMessage(msg)
    playSend();
  };



  // Setup
  useEffect(() => {
    socket.open();
    socket.connect();
    console.dir(socket)
    socket.send('Bye')
    socket.emit('user-message', {
      user: "me",
      message: 'Bye'
    });
    socket.on("connect", () => {
      // false
    });
    socket.on('user-message', (message) => {
      socket.emit('Bye')
      socket.send('Bye')
      setMessages([...messages, message])
    });
    socket.on('bot-message', (message) => {
      console.dir(message)
      setMessages([...messages, message])
      playReceive();
    });
    socket.on('bot-typing', (message) => {

    });
    socket.on('message', (message) => {
      console.dir(message)
    });
    socket.on('RECEIVE_MESSAGE', function (data) {
      addMessages(data);
    });
  });


  // Runs on App unmount, means on closing the application
  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="messages">
      <Header />
      <div className="messages__list" id="message-list">
        {isTyping == true &&
          <TypingMessage />
        }
        {messages.length > 0 &&
          <Message nextMessage={LatestMessagesContext} message={messages[messages.length - 1]} botTyping={isTyping} />
        }

      </div>
      <Footer
        //message={message} 
        sendMessage={sendMessage}
      //onChangeMessage={onChangeMessage} 
      />
    </div>
  );
}

export default Messages;