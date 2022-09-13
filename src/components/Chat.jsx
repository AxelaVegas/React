import { useState } from 'react';
import { WindowMessages } from './WindowMessages';
import TextField from '@mui/material/TextField';
import { ButtonMUI } from './button/Button';

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
        <label className="chat">
          <p>{name}</p>
          <TextField 
            label={'enter your name'} 
            onChange={handleChange}
            name="name" 
            />
          {/* <input
            type="text"
            name="name"
            className="inp-message"
            onChange={handleChange}
          /> */}
          {/* <input type="text" name="name" className="inp-message" /> */}
          {/* <input onClick={longHandleChange} value="Отправить" /> */}
          <span onClick={longHandleChange}><ButtonMUI label="SEND" /></span>
        </label>
      </form>
    </div>
  );
};
