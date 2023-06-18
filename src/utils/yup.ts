import { object, string } from 'yup';

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
    // advantages: string().required('Обязательное поле'),
    groupCheck: string().required('Обязательное поле'),
    groupRadio: string().required('Обязательное поле'),
  }),
  object({
    about: string()
      .required('Обязательное поле')
      .max(200, 'Максимальная длина 200 символов'),
  }),
];