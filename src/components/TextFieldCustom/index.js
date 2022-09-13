import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const TextFieldCustom = ({ lableText, disabled, value, type }) => {
  return (
    <div className={'textfield-custom textfield-custom--' + type}>
      <InputLabel id="demo-simple-select-label">{lableText}</InputLabel>
      <TextField
        disabled={disabled}
        id="filled-disabled"
        value={value}
        name="nameSubject"
        onChange={(e) => {
          console.log('change subject-name');
          //formik.handleChange(e);
        }}
        variant="filled"
      />
    </div>
  );
};

export default TextFieldCustom;
