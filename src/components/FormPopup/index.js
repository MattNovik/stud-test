import './index.scss';
import { useFormik } from 'formik';
//import * as yup from 'yup';
import { ReactComponent as IconClose } from '../../img/close.svg';
import FormControl from '@mui/material/FormControl';
import TextFieldAutocomplete from '../TextFieldAutocomplete';
import TextFieldCustom from '../TextFieldCustom';
import SwitchesGroup from '../SwitchesGroup';
import SelectorCustom from '../SelectorCustom';
import RadioGroupCustom from '../RadioGroupCustom';
import { styled } from '@mui/material/styles';

import {
  defaultButtonText,
  defaultFormNameText,
  defaultTypeOfWork,
  switchesData,
  colorsTypes,
} from '../../data/data';

const CustomFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`;

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

  return (
    <div className="form-popup">
      <div className="form-popup__name">
        <p>Генератор формы</p>
        <IconClose className="form-popup__close" />
      </div>
      <form onSubmit={formik.handleSubmit} className="form-creator">
        <CustomFormControl>
          <RadioGroupCustom
            labelText="Цвет"
            name="colors"
            value={formik.values.colors}
            id="colors"
            options={colorsTypes}
          />
          <SelectorCustom
            labelText="Заголовок формы:"
            value={formik.values.nameForm}
            options={defaultFormNameText}
            valueSecond={formik.values.nameFormOther}
          />
          <TextFieldAutocomplete
            labelText="Текст на кнопке:"
            type="button-text"
            name="buttonText"
            options={defaultButtonText}
          />
          <TextFieldAutocomplete
            labelText="Тип работы по умолчанию:"
            type="type-of-work"
            name="typeOfWork"
            options={defaultTypeOfWork}
          />
          <TextFieldCustom
            lableText="Предмет по умолчанию"
            disabled={true}
            value={formik.values.nameSubject}
            type="subject"
          />
          <TextFieldCustom
            lableText="Город по умолчанию"
            disabled={true}
            value={formik.values.nameCity}
            type="city"
          />
          <SwitchesGroup labelText="Поля формы" options={switchesData} />
          <div className="form-creator__visual">
            <p>Предварительный просмотр формы</p>
          </div>
        </CustomFormControl>
      </form>
    </div>
  );
};

export default FormPopup;
