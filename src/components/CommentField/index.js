import './index.scss';
import { ReactComponent as IconUpload } from '../../img/upload.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextFieldForm = styled(TextField)`
  background-color: #f1f3f8;
  border-radius: 6px;
  max-height: 50px;

  & .MuiInputBase-root {
    padding-right: 22px;
  }

  & .MuiFormLabel-filled {
    transform: translate(10px, -18px) scale(0.75);
    color: #ffffff;
  }

  & .MuiFormLabel-filled.Mui-focused ~ .MuiInputBase-root .icon-close {
    display: block;
  }

  & .MuiFormLabel-root {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #9eaabd;
    transform: translate(22px, 18px);
  }

  & .MuiFormLabel-root.Mui-focused {
    display: block;
    transform: translate(10px, -18px) scale(0.75);
    color: #ffffff;
  }

  & .MuiInputBase-input {
    height: auto;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
    padding: 14px 22px 16px;
    background-color: transparent;
  }

  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
  }

  & .MuiInputBase-root.Mui-focused {
    & fieldset {
      top: 0;
      border: solid 1px #000;
      box-sizing: border-box;
    }
  }

  & legend {
    display: none;
  }

  & .icon-close {
    display: none;
    cursor: pointer;
  }
`;

const CommentField = () => {
  return (
    <div className="comment-field">
      <CustomTextFieldForm
        fullWidth
        id="outlined-required"
        label="Введите ваш комментарий"
        defaultValue=""
        InputProps={{
          endAdornment: (
            <div className="comment-field__loader-wrapper">
              <input
                type="file"
                name="file"
                id="file"
                className="comment-field__input-file"
                multiple
                onChange={() => console.log('upload')}
              ></input>
              <label htmlFor="file">
                <IconUpload className="icon-upload" />
              </label>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default CommentField;
