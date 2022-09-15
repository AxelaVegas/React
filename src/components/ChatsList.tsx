import { useState } from 'react';

export const ChatsList = () => {
  const [chatsName, setChatsName] = useState([
    { id: 1, chatName: 'First chat' },
    { id: 2, chatName: 'Second chat' },
    {
      id: 3,
      chatName: 'Third chat',
    },
  ]);

  return (
    <>
      <ul>
        {chatsName.map((chat, idx) => (
          <li key={idx}>{chat.chatName}</li>
        ))}
      </ul>
    </>
  );
};
