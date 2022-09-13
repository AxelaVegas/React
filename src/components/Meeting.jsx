import { useState } from 'react';

export const Meeting = ({ changeName }) => {
  const [name, setName] = useState('');

  const handelChange = (ev) => {
    setName(ev.target.value);
    /* changeName(ev.target.value) */
  };

  const longHandleChange = () => {
    changeName(name);
  };

  return (
    <div className="body">
      <div className="app-body">
        <p>So, meeting! What is your name</p>
        <input type="text" onChange={handelChange} />
        <button onClick={longHandleChange}>SENd</button>
      </div>
    </div>
  );
};
