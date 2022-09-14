import Button from '@mui/material/Button';

interface ButtonMuiProps {
  label: number;
}

export const ButtonMUI = ({ label }: ButtonMuiProps) => {
  return <Button variant="outlined">{label}</Button>;
};
