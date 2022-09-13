import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    padding: 6px 34px 6px 12px;
  }

  &.MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl {
    display: none;
  }

  & .MuiFormLabel-root {
    transform: translate(0, -50%);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
    left: 6px;
    top: 50%;
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    padding-right: 34px;
  }
`;

const CustomAutocomplete = styled(Autocomplete)`
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    width: 100%;
    padding: 0;
  }
`;

const TextFieldAutocomplete = ({ labelText, type, name, options }) => {
  return (
    <div className={'textfield-autocomplete textfield-autocomplete--' + type}>
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomAutocomplete
        disablePortal
        name={name}
        options={options}
        renderInput={(params) => (
          <CustomTextField {...params} label={options[0].label} />
        )}
      />
    </div>
  );
};

export default TextFieldAutocomplete;
