import { useState } from 'react';
import { WindowMessages } from './WindowMessages';

export const Chat = (props) => {
  const [message, setMessage] = useState('');
  const name = props.author;
  const messageList = props.messageList;

  const handleChange = (ev) => {
    setMessage(ev.target.value);
  };

  const longHandleChange = () => {
    props.changeMessageList(name, message);
  };

  return (
    <div className="app-body">
      <WindowMessages messageList={messageList} />
      <form>
        <h2>Enter your message</h2>
        <label className="chat">
          <p>{name}</p>
          <input
            type="text"
            name="name"
            className="inp-message"
            onChange={handleChange}
          />
          {/* <input type="text" name="name" className="inp-message" /> */}
          <input onClick={longHandleChange} value="Отправить" />
        </label>
      </form>
    </div>
  );
};
