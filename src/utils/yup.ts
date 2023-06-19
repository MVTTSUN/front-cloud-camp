import { array, boolean, object, string } from 'yup';

const test = {
  value: string().required('Обязательное поле'),
};

export const schema = [
  object({
    phone: string().required('Обязательное поле'),
    email: string()
      .email('Невалидный адрес электронной почты')
      .matches(/@[^.]*\./, 'Невалидный адрес электронной почты'),
  }),
  object({
    nickname: string()
      .required('Обязательное поле')
      .max(30, 'Максимальная длина 30 символов')
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, 'Могут быть только буквы и цифры'),
    name: string()
      .required('Обязательное поле')
      .max(50, 'Максимальная длина 30 символов')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Могут быть только буквы'),
    surname: string()
      .required('Обязательное поле')
      .max(50, 'Максимальная длина 30 символов')
      .matches(/^[a-zA-Zа-яА-Я]+$/, 'Могут быть только буквы'),
    sex: string().required('Обязательное поле'),
  }),
  object({
    advantages: array()
      .of(object(test).required('Обязательное поле'))
      .required('Обязательное поле'),
    groupCheck: boolean().oneOf([true], 'Хотя бы один должен быть отмечен'),
    groupRadio: string().required('Обязательное поле'),
  }),
  object({
    about: string()
      .required('Обязательное поле')
      .max(200, 'Максимальная длина 200 символов'),
  }),
];
