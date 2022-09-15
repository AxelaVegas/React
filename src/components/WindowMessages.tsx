import { FC } from 'react';
import { Messages } from 'src/types';

interface WindowMessagesProps {
  messageList: Messages;
}

export const WindowMessages: FC<WindowMessagesProps> = (props) => {
  const messageList = props.messageList;
  return (
    <ul>
      {messageList.map((message, idx) => (
        <li key={idx}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};
