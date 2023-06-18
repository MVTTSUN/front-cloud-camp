import { store } from './store';

export type UserLinkType = {
  name: string;
  src: string;
};

export type FormDataType = {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: string[];
  about: string;
  groupCheck: number[];
  groupRadio: string;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
