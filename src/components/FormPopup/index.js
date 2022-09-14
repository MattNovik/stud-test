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

import {
  defaultButtonText,
  defaultFormNameText,
  defaultTypeOfWork,
  switchesData,
  colorsTypes,
} from '../../data/data';

const FormPopup = () => {
  const formik = useFormik({
    initialValues: {
      colors: 'red',
      nameForm: 1,
      nameFormOther: 'Введите свой заголовок',
      buttonText: 11,
      typeOfWork: 111,
      nameSubject: 'Введите название предмета',
      nameCity: 'Введите название города',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const customChange = (e) => {
    console.log('custom change');
    formik.handleChange(e);
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
            valueSecond={formik.values.nameFormOther}
            customChange={customChange}
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
            disabled={true}
            value={formik.values.nameSubject}
            type="subject"
            customChange={customChange}
          />
          <TextFieldCustom
            lableText="Город по умолчанию"
            disabled={true}
            value={formik.values.nameCity}
            type="city"
            customChange={customChange}
          />
          <SwitchesGroup labelText="Поля формы" options={switchesData} />
        </div>
      </form>
      <div className="form-visual">
        <p className="form-visual__name">Предварительный просмотр формы</p>
        <FormCreated />
      </div>
    </div>
  );
};

export default FormPopup;
