import { useState } from 'react';
import { ButtonMUI } from './button/Button';
import TextField from '@mui/material/TextField';

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
        <div className='meeting-form'>

          {/* <input type="text" onChange={handelChange} /> */}
          <TextField label={'enter your name'} onChange={handelChange} />

          {/* ??? почему не получалось сделать без СПАНА */}
          <span onClick={longHandleChange}><ButtonMUI label="SEND" /></span>
        </div>
      </div>
    </div>
  );
};
