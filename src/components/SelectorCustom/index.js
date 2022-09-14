import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)`
  margin: 0 0 21px;

  & .MuiSelect-select {
    padding: 6px 34px 6px 12px;
    min-height: auto;
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiSelect-outlined {
    padding-right: 34px;
  }

  & fieldset {
    top: 0;
  }
`;

const CustomTextField = styled(TextField)`
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

const SelectorCustom = ({ labelText, value, options, valueSecond }) => {
  return (
    <div className="select select--form-name">
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomSelect
        labelId="demo-simple-select-label"
        name="nameForm"
        value={value}
        label="Заголовок формы:"
        onChange={(e) => {
          console.log('change name-form');
          //formik.handleChange(e);
        }}
      >
        {options.map((option) => (
          <MenuItem key={nanoid()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
      <CustomTextField
        disabled
        id="filled-disabled"
        value={valueSecond}
        onChange={(e) => {
          console.log('change other-name');
          //formik.handleChange(e);
        }}
        variant="filled"
      />
    </div>
  );
};

export default SelectorCustom;
