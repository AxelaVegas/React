import { FC, useState } from 'react';
import { ButtonMUI } from './button/Button';
import TextField from '@mui/material/TextField';

interface MeetingProps {
  changeName: (ev: string) => void;
}

export const Meeting: FC<MeetingProps> = ({ changeName }) => {
  const [name, setName] = useState('');

  const handelChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  const longHandleChange = () => {
    changeName(name);
  };

  return (
    <div className="body">
      <div className="app-body">
        <p>So, meeting! What is your name</p>
        <div className="meeting-form">
          <TextField label={'enter your name'} onChange={handelChange} />

          {/* ??? почему не получалось сделать без СПАНА */}
          <span onClick={longHandleChange}>
            <ButtonMUI label="SEND" />
          </span>
        </div>
      </div>
    </div>
  );
};
