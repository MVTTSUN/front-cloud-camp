import { object, string, number } from 'yup';

export const schema = object({
  phone: string().required('fgg'),
  email: string(),
  nickname: string(),
  name: string(),
  surname: string(),
  sex: string(),
  advantages: string(),
  about: string(),
  groupCheck: number(),
  groupRadio: string(),
});
