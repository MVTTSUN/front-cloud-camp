import { array, number, object, string } from 'yup';
import { errorMessages } from './const';

const {
  required,
  emailValid,
  maxLength,
  maxLengthTextarea,
  onlyLetters,
  onlyLettersAndNumbers,
} = errorMessages;

export const schema = [
  object({
    phone: string().required(required),
    email: string()
      .email(emailValid)
      .matches(/@[^.]*\./, emailValid),
  }),
  object({
    nickname: string()
      .required(required)
      .max(30, maxLength)
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, onlyLettersAndNumbers),
    name: string()
      .required(required)
      .max(50, maxLength)
      .matches(/^[a-zA-Zа-яА-Я]+$/, onlyLetters),
    surname: string()
      .required(required)
      .max(50, maxLength)
      .matches(/^[a-zA-Zа-яА-Я]+$/, onlyLetters),
    sex: string().required(required),
  }),
  object({
    advantages: array()
      .of(
        object({
          value: string().required(required),
        })
      )
      .min(1, required),
    groupCheck: array().of(number()).min(1, required),
    groupRadio: string().required(required),
  }),
  object({
    about: string().required(required).max(200, maxLengthTextarea),
  }),
];
