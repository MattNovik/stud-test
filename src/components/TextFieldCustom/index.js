import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)`
  width: 100%;

  & input {
    padding: 6px 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #9da5b1;
  }

  & .MuiInputBase-root {
    border-radius: 4px;
  }

  & .MuiInputBase-root::after,
  & .MuiInputBase-root::before {
    content: none;
  }
`;

const TextFieldCustom = ({
  lableText,
  disabled,
  value,
  type,
  customChange,
}) => {
  return (
    <div className={'textfield-custom textfield-custom--' + type}>
      <InputLabel id="demo-simple-select-label">{lableText}</InputLabel>
      <CustomTextField
        disabled={disabled}
        id="filled-disabled"
        value={value}
        name="nameSubject"
        onChange={customChange}
        variant="filled"
      />
    </div>
  );
};

export default TextFieldCustom;
