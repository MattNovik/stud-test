import './index.scss';
import { useFormik } from 'formik';
//import * as yup from 'yup';
import { ReactComponent as IconClose } from '../../img/close.svg';
import TextFieldAutocomplete from '../TextFieldAutocomplete';
import TextFieldCustom from '../TextFieldCustom';
import SwitchesGroup from '../SwitchesGroup';
import SelectorCustom from '../SelectorCustom';
import RadioGroupCustom from '../RadioGroupCustom';
import FormCreated from '../FormCreated';
import { useState } from 'react';

import {
  defaultButtonText,
  defaultFormNameText,
  defaultTypeOfWork,
  switchesData,
  colorsTypes,
} from '../../data/data';

const FormPopup = () => {
  const [color, setColor] = useState('red');
  const [formName, setFormName] = useState(defaultFormNameText[0].label);
  const [realFormName, setRealFormName] = useState(formName);
  const [formNameCustom, setFormNameCustom] = useState(
    'Введите свой заголовок'
  );
  const [formNameCustomDisabled, setFormNameCustomDisabled] = useState(true);
  const [subjectName, setSubjectName] = useState({
    value: 'Введите название предмета',
    label: 'Введите название предмета',
  });
  const [cityName, setCityName] = useState('Введите название города');

  const [switches, setSwitches] = useState(
    switchesData.map((item) => {
      let newObj = {};
      newObj.label = item.label;
      newObj.checked = item.checked;
      newObj.name = item.value;
      return newObj;
    })
  );

  const formik = useFormik({
    initialValues: {
      colors: 'red',
      nameForm: 1,
      formNameCustom: formNameCustom,
      buttonText: 11,
      typeOfWork: 111,
      subject: subjectName.label,
      city: cityName,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const customChange = (e) => {
    if (e.target.name === 'colors') {
      setColor(e.target.value);
    } else if (e.target.name === 'nameForm') {
      let newFormName = defaultFormNameText.find(
        (item) => item.value === e.target.value
      ).label;
      setFormName(newFormName);
      setRealFormName(newFormName);
      if (e.target.value === 'custom') {
        setFormNameCustomDisabled(false);
        setRealFormName(formNameCustom);
      } else {
        setFormNameCustomDisabled(true);
      }
    } else if (e.target.name === 'subject') {
      setSubjectName({ value: e.target.value, label: e.target.value });
    } else if (e.target.name === 'city') {
      setCityName(e.target.value);
    }
    formik.handleChange(e);
  };

  const customChangeSecond = (e) => {
    setFormNameCustom(e.target.value);
    setRealFormName(e.target.value);
    formik.handleChange(e);
  };

  const customChangeSwitches = (e) => {
    let createdSwitches = switches.map((item) => {
      if (item.name === e.target.name) {
        item.checked = !item.checked;
      }
      return item;
    });
    setSwitches(createdSwitches);
  };

  return (
    <div className="form-popup">
      <div className="form-popup__name">
        <p>Генератор формы</p>
        <IconClose className="form-popup__close" />
      </div>
      <form onSubmit={formik.handleSubmit} className="form-creator">
        <div className="form-creator__wrapper">
          <RadioGroupCustom
            labelText="Цвет"
            name="colors"
            value={formik.values.colors}
            id="colors"
            options={colorsTypes}
            customChange={customChange}
          />
          <SelectorCustom
            labelText="Заголовок формы:"
            value={formik.values.nameForm}
            options={defaultFormNameText}
            valueSecond={formik.values.formNameCustom}
            customChange={customChange}
            customChangeSecond={customChangeSecond}
            formNameCustomDisabled={formNameCustomDisabled}
          />
          <TextFieldAutocomplete
            labelText="Текст на кнопке:"
            type="button-text"
            name="buttonText"
            options={defaultButtonText}
            customChange={customChange}
          />
          <TextFieldAutocomplete
            labelText="Тип работы по умолчанию:"
            type="type-of-work"
            name="typeOfWork"
            options={defaultTypeOfWork}
            customChange={customChange}
          />
          <TextFieldCustom
            lableText="Предмет по умолчанию"
            value={formik.values.subject}
            type="subject"
            name="subject"
            customChange={customChange}
            switches={switches}
          />
          <TextFieldCustom
            lableText="Город по умолчанию"
            value={formik.values.city}
            type="city"
            name="city"
            customChange={customChange}
            switches={switches}
          />
          <SwitchesGroup
            labelText="Поля формы"
            options={switches}
            customChangeSwitches={customChangeSwitches}
          />
        </div>
      </form>
      <div className="form-visual">
        <p className="form-visual__name">Предварительный просмотр формы</p>
        <FormCreated
          color={color}
          realFormName={realFormName}
          switches={switches}
          subjectName={subjectName}
          cityName={cityName}
        />
      </div>
    </div>
  );
};

export default FormPopup;
