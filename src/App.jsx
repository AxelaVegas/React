import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { Meeting } from './components/Meeting';
import { Chat } from './components/Chat';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export function App() {
  const [name, setName] = useState(undefined);
  const [messageList, setValue] = useState([]);

  const changeName = (ev) => {
    setName(ev);
  };

  const changeMessageList = (user, text) => {
    /* setValue(user, text) */
    let copy = Object.assign([], messageList);
    copy.push({ author: user, text: text });
    setValue(copy);
  };

  useEffect(
    () => {
      if (
        messageList.length > 0 &&
        messageList[messageList.length - 1].author !== 'Bot'
      ) {
        setTimeout(() => {
          changeMessageList('Bot', 'Я Бот');
        }, 1000);
      }
      console.log('canged');
    } /* [messageList] */
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>My first app on react</h1>
      </header>
      <Meeting changeName={changeName} />
      <Message name={name} />
      <Chat
        messageList={messageList}
        changeMessageList={changeMessageList}
        author={name}
      />
      <Footer />
    </div>
  );
}
