import './index.scss';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)`
  background-color: #f1f3f8;
  border-radius: 6px;

  & .MuiSelect-select {
    padding: 15px 22px 18px;
    min-height: auto;
    text-align: left;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiSelect-outlined {
    padding-right: 22px;
  }

  & legend {
    display: none;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
  }
`;

const CustomFormControl = styled(FormControl)`
  & .MuiFormLabel-root.Mui-focused,
  & .MuiFormLabel-filled {
    color: #ffffff;
    transform: translate(10px, -18px) scale(0.75);
  }

  & .Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border: solid 1px #000;
      box-sizing: border-box;
    }
  }
`;

const CustomIconArrowDrop = styled(IconArrowDrop)`
  width: 18px;
  height: 18px;
`;

const SelectorCustomCreated = ({ value, options, customChange }) => {
  return (
    <div className="select-created select-created--form-name">
      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Выберите тим работы
        </InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="workType"
          value={value}
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
      </CustomFormControl>
    </div>
  );
};

export default SelectorCustomCreated;
