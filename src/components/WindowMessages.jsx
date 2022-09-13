export const WindowMessages = (props) => {
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
