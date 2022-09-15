import { FC, useState } from 'react';
import { WindowMessages } from './WindowMessages';
import TextField from '@mui/material/TextField';
import { ButtonMUI } from './button/Button';
import { Messages } from 'src/types';
import { ChatsList } from './ChatsList';

interface ChatProps {
  author: string;
  messageList: Messages;
  changeMessageList: (user: string, text: string) => void;
}

export const Chat: FC<ChatProps> = (props) => {
  const [message, setMessage] = useState('');
  const name = props.author;
  const messageList = props.messageList;

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(ev.target.value);
  };

  const longHandleChange = () => {
    props.changeMessageList(name, message);
  };

  return (
    <div className="app-body">
      <div className="chat-zone">
        <ChatsList />
        <WindowMessages messageList={messageList} />
      </div>
      <form>
        <label className="chat">
          <p>{name}</p>
          <TextField
            label={'enter your name'}
            onChange={handleChange}
            name="name"
          />
          <span onClick={longHandleChange}>
            <ButtonMUI label="SEND" />
          </span>
        </label>
      </form>
    </div>
  );
};
