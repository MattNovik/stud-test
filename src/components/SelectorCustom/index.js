import './index.scss';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
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

const CustomIconArrowDrop = styled(IconArrowDrop)`
  width: 18px;
  height: 18px;
`;

const SelectorCustom = ({
  labelText,
  value,
  options,
  valueSecond,
  customChange,
}) => {
  return (
    <div className="select select--form-name">
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomSelect
        labelId="demo-simple-select-label"
        name="nameForm"
        value={value}
        label="Заголовок формы:"
        onChange={customChange}
        /*         IconComponent={(props) => (
          <CustomIconArrowDrop
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined"
            data-testid="ArrowDropDownIcon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          />
        )} */
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
        onChange={customChange}
        variant="filled"
      />
    </div>
  );
};

export default SelectorCustom;
