import './index.js';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { nanoid } from 'nanoid';

const SwitchesGroup = ({ options }) => {
  return (
    <div className="switches">
      <p className="switches "></p>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={nanoid()}
            control={<Switch defaultChecked name={option.value} />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default SwitchesGroup;
