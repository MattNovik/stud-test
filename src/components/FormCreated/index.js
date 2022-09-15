import './index.scss';
import React from 'react';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import { ReactComponent as IconClose } from '../../img/close.svg';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SearchAutocomplete from '../SearchAutocomplete';
import TextField from '@mui/material/TextField';
import SelectorCustomCreated from '../SelectorCustomCreated';
import CommentField from '../CommentField';
import { typesData, subjectData } from '../../data/data';
import { styled } from '@mui/material/styles';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (###) ###-##-##"
      definitions={{
        '#': /[1-9]|_/,
      }}
      inputRef={ref}
      onAccept={(value) => {
        onChange(value);
      }}
      overwrite
    />
  );
});

const CustomTextFieldForm = styled(TextField)`
  background-color: #f1f3f8;
  border-radius: 6px;
  max-height: 50px;

  & .MuiFormLabel-filled {
    transform: translate(10px, -18px) scale(0.75);
    color: #ffffff;
  }

  & .MuiFormLabel-filled.Mui-focused ~ .MuiInputBase-root .icon-close {
    display: block;
  }

  & label {
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

  & input {
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

const validationSchema = yup.object({
  city: yup.string('Вставьте ваш город').required('Город обязателен'),
  fontSize: yup.string('Напишите шрифт и размер').required('Шрифт обязателен'),
  nameProf: yup.string('Впишите ваше имя ').required('Имя обязательно'),
  workType: yup
    .string('Выберите тип работы')
    .required('Тип работы обязательно'),
  subjectType: yup
    .string('Выберите тип работы')
    .required('Тип работы обязательно'),
  theme: yup.string('Тема работы').required('Тема работы обязательно'),
  email: yup
    .string('Вставьте email')
    .email('Вставьте валидный email')
    .required('Email обязателен'),
  telephone: yup.number('Вставь телефон'),
});

const FormCreated = () => {
  const formikCreated = useFormik({
    initialValues: {
      city: '',
      fontSize: '',
      nameProf: '',
      workType: '',
      subjectType: '',
      theme: '',
      email: '',
      telephone: '+7 (___) ___-__-__',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('q');
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChange = (e) => {
    console.log(e);
    formikCreated.handleChange(e);
  };

  const customChange = (e) => {
    console.log(e.target.value);
    formikCreated.handleChange(e);
  };

  return (
    <form onSubmit={formikCreated.handleSubmit} className="form-created">
      <p className="form-created__name">Рассчитайте цену консультации:</p>
      <div className="form-created__wrapper">
        <SelectorCustomCreated
          labelText="Выберите текст работы"
          type="work-type-text"
          value={formikCreated.values.workType}
          options={typesData}
          customChange={customChange}
        />
        <SearchAutocomplete
          required
          labelText="Предмет"
          type="subject-type-text"
          name="subjectType"
          value={formikCreated.values.subjectType}
          options={subjectData}
          customChange={customChange}
        />
        <CustomTextFieldForm
          id="outlined-required"
          label="Введите тему работы"
          name="theme"
          value={formikCreated.values.theme}
          onChange={customChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
          }}
        />
        <CustomTextFieldForm
          required
          id="outlined-required"
          label="Ваше имя"
          name="nameProf"
          value={formikCreated.values.nameProf}
          onChange={customChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
          }}
        />
        <CustomTextFieldForm
          required
          id="outlined-required"
          label="E-mail"
          name="email"
          value={formikCreated.values.email}
          onChange={customChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
          }}
        />
        <CustomTextFieldForm
          id="telephone"
          label="Пришлем SMS с ценой (без спама)"
          name="telephone"
          value={formikCreated.values.telephone}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
            inputComponent: TextMaskCustom,
          }}
        />
        <CustomTextFieldForm
          id="outlined-required"
          label="Город"
          name="city"
          value={formikCreated.values.city}
          onChange={customChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
          }}
        />
        <CustomTextFieldForm
          id="outlined-required"
          label="Размер шрифта"
          name="fontSize"
          value={formikCreated.values.fontSize}
          onChange={customChange}
          InputProps={{
            endAdornment: (
              <IconClose
                onClick={() => console.log('clear')}
                className="icon-close"
              />
            ),
          }}
        />
      </div>
      <button type="button" className="form-created__add-comment">
        <span className="form-created__add-comment-text">
          Добавить комментарий и файлы
        </span>
        <span className="form-created__add-comment-icon">
          <IconArrowDrop />
        </span>
      </button>
      <CommentField />
      <button type="submit" className="form-created__button">
        <span className="form-created__button-text">Узнать стоимость</span>
        <span className="form-created__button-icon">
          <IconArrowDrop />
        </span>
      </button>
      <p className="form-created__add-info">
        *Нажимая на кнопку "Узнать стоимость" я даю согласие на обработку своих
        персональных данных в соответствии с{' '}
        <a href="#">Политикой конфидециальности</a>
      </p>
    </form>
  );
};

export default FormCreated;
